import React,{useEffect,useState} from 'react'
import {View,Text, ActivityIndicator,ScrollView} from 'react-native';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CardButton from '../../components/CardButton';
function index(props:any) {
    const [product, setProduct] = useState<Product>();
    useEffect(()=> {
setProduct(props.route.params.product)
    },[])
    if(!product){
     
        return <ActivityIndicator/>
    }

  return (
    <View>
      <ScrollView>
      <ImageCarousel images={product.images} />
  <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
    <Text>Detaylar</Text>
    <DetailProperty/>
    
    </ScrollView>
    <CardButton/>
    </View>
  )
}

export default index
