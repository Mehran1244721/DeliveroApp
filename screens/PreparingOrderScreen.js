import { View, Text, SafeAreaView , StyleSheet } from 'react-native'
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },4000)
    },[]);
  return (
    <SafeAreaView style= {styles.SafeArea}>
      <Animatable.Image style = {styles.image} source={require("../assets/giphy.gif")} animation = 'slideInUp' iterationCount={1} >

      </Animatable.Image>
      <Animatable.Text style = {styles.text} animation='slideInUp' iterationCount={1}>
       Waiting for resturant to accept your order
      </Animatable.Text>

      <Progress.Circle size={40} indeterminate = {true} color = 'white'></Progress.Circle>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;

const styles = StyleSheet.create({
    text : {
     marginVertical : 15 , 
     marginTop : 60,
     fontSize : 20 , 
     color : 'white',
     textAlign : 'center'
    },
    
    SafeArea  : {
        flex : 1 , 
        backgroundColor : '#00CCBB', 
        justifyContent : 'center' , 
        alignItems : 'center'
    } , 
    image : {
        height : 100 , 
        width : 100
    }
});