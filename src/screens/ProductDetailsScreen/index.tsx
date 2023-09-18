import React,{useEffect,useState} from 'react'
import {View,Text, ActivityIndicator} from 'react-native';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel';

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
      <Text style={{paddingHorizontal:10,paddingVertical:13,color:'#808B99',fontWeight:'600',fontSize:14}}>
        Detaylar
      </Text>
    
    
    </View>
  )
}

export default index
