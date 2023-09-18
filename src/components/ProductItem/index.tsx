import React from 'react'
import {View,Text,Image,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';
const {width,height} = Dimensions.get('window');
type productItemType={
  item:Product
}
function index({item}:productItemType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ProductDetails",{product:item})}
    style={{width:width*0.28,marginTop:12,backgroundColor:'red',height:height*0.26,marginLeft:12,marginBottom:10}}>
<Image style={{width:width*0.28,height:width*0.28,borderRadius:12,borderWidth:0.1,borderColor:'gray'}}source={{uri:item.image}}/>
        <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:10,color:"747990",textDecorationLine:'line-through'}}>
            <Text>TL</Text>{item.fiyat}
            </Text>
            <Text style={{}}>
          <Text>TL</Text>{item.fiyatIndirimli}

            </Text>
        </View>
        <Text>{item.name}</Text>
        <Text>{item.miktar}</Text>
        <View style={{width:30,height:30,backgroundColor:'black',position:'absolute'}}>
            
        </View>
    </TouchableOpacity>
  )
}

export default index
