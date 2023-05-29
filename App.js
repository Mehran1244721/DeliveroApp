import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import BasketScreen from './screens/BasketScreen';
import { Provider } from 'react-redux';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import { store } from './store';
import DeliveryScreen from './screens/DeliveryScreen';

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
     <stack.Navigator>
      <stack.Screen name='Home' component={HomeScreen}></stack.Screen>
      <stack.Screen name='Resturant' component={ResturantScreen}></stack.Screen>
      <stack.Screen name='PrepareOrder' component={PreparingOrderScreen} options = {{presentation : 'fullScreenModal' , headerShown : 'false'}}></stack.Screen>
      <stack.Screen name='Basket' component={BasketScreen} options = {{presentation : 'modal', headerShown : false}}></stack.Screen>
      <stack.Screen name='Delivery' component={DeliveryScreen} options = {{presentation : 'modal', headerShown : false}}></stack.Screen>

     </stack.Navigator>
     </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
