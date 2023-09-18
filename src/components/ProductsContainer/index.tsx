import React from 'react'
import {View,Text} from 'react-native';
import ProductItem from '../../components/ProductItem'
import productsGetir from '../../../assets/productsGetir';
function index() {
  return (
    <View>
        <View style={{flexDirection:'row'}}>
            {productsGetir.slice(0,2).map((item) => (
                <ProductItem key={item.id} item={item} />

            ))}
            
        </View>
        <Text>çubuk</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
{productsGetir.slice(2).map((item) => (
                <ProductItem key={item.id} item={item} />

))}
        </View>
    </View>
  )
}

export default index
