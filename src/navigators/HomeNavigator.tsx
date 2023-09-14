import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import {Image,Text} from 'react-native';
import CategoryFilterScreen from './../screens/CategoryFilterScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
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
    </Stack.Navigator>
  )
}

export default HomeNavigator
