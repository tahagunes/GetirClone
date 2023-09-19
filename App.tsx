import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import 'react-native-gesture-handler';
//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/'); 
export default function App() {
  const linking= {
    prefixes:[prefix],
    config: {
      screens: {
        Sohbet: {
          screens:{
            CartScreen:{
            path:"cartScreen/:message",
            parse: {
              message: (message:string) => `${message}`,
            },
            }
          }
        }
      }
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}); 
