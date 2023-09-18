import React,{useEffect,useState} from 'react'
import {View,Text, ActivityIndicator} from 'react-native';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';

function index(props) {
    const [product, setProduct] = useState<Product>();
    useEffect(()=> {
setProduct(props.route.params.product)
    },[])
    if(!product){
     
        return <ActivityIndicator/>
    }

  return (
    <View style={{flex:1}}>
  
  <ImageCarousel images={product.images} />
  <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
    
    
    </View>
  )
}

export default index
