import React,{useState} from 'react'
import {ScrollView ,View,Text,Dimensions,TouchableOpacity} from 'react-native';
const {height,width} =Dimensions.get('screen');
const TypeBox = ({item,active}:{item:string,active:string}) => {
    return(
        <TouchableOpacity style={[{flexDirection:'row',alignItems:'center',paddingHorizontal:10,height:height*0.064,borderRadius:8,height:height*0.045,marginRight:12},item==active ? {backgroundColor:'#5C3EBC'}:{borderColor:'#f0eff7',borderWidth:1}]}>
<Text style={[{fontSize:12, color:'#F7849F7', fontWeight:'600'},item==active &&{color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}
function index() {
    const [category,setCategory] = useState<String>("Birlikte İyi Gider")
  return (
   <ScrollView style={{width:'100%',height:height*0.07,flexDirection:'row',paddingVertical:height*0.014}}showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
{["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
    <TypeBox item={item} active={category} />
))}
   </ScrollView>
  )
}

export default index
