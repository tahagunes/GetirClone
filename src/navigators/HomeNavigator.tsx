import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import {Image,Text} from 'react-native';
import CategoryFilterScreen from './../screens/CategoryFilterScreen';
import ProductDetailScreen from './../screens/ProductDetailsScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Stack = createStackNavigator();

function MyStack({navigation,route}) {
  const tabHiddenRoutes = ["ProductDetails","CartScreen"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerStyle:{backgroundColor:'#5C3EBC'},
            headerTitle:()=> (
                <Image
                source={require("../../assets/getirlogo.png")}
                style={{width:70,height:30}}/>
            )
        }}
        />
<Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor:'white',
          headerBackTitleVisible:false,
            headerStyle:{backgroundColor:'#5C3EBC'},
            headerTitle:()=> (
                <Text>Ürünler </Text>
            )
        }}
        />
<Stack.Screen
options={{
  headerBackTitleVisible:false,
  headerRight:()=> (
    <TouchableOpacity>
      <Text>fav</Text>
    </TouchableOpacity>
  ),
  headerLeft:() => (
<TouchableOpacity onPress={() => navigation.goBack()}>
  <Text>X</Text>
</TouchableOpacity>
  ),
  headerTitle:() => (
    <Text>detay</Text>
  )
}}
name="ProductDetails"
component={ProductDetailScreen}
/>


        
    </Stack.Navigator>
  )
  return 
}

export default function HomeNavigator({navigation,route}){
  return <MyStack navigation = {navigation} route={route}/>

}

