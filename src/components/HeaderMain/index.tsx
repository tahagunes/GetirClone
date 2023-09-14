import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Entypo } from "@expo/vector-icons";
function index(){
return(
    <View style={styles.headerMain }>
        <View style={styles.headerOne}>
<Image style={styles.image} source={{uri:"https://img.icons8.com/?size=1x&id=ORAO5DF37nXq&format=png"}}/>
<View style={styles.headerOneView}>
    <Text style={{fontWeight:'600',fontSize:16}}>Ev</Text>
    <Text style={{fontWeight:'500',fontSize:11,color:'#6E7480',marginLeft:4,marginRight:35}}>adatepe mahallesi 62/9 sokak ata12...</Text>
    <Entypo name="chevron-right" size={22} color="#5D3EBD"/>
</View >
<View style={styles.headerTwo}>
    <Text style={{fontSize:10,fontWeight:'bold',color:'#5D3EBD'}}>TVS</Text>
    <Text style={{fontSize:20,fontWeight:'bold',color:'#5D3EBD'}}>13<Text style={{fontSize:15,fontWeight:'bold',color:'#5D3EBD'}}>dk</Text></Text>
</View>
        </View>
        <View>


        </View>

    </View>
)
}
export default index;