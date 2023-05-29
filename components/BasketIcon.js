import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Features/BasketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {

    const items = useSelector(selectBasketItems);

    const navigation = useNavigation();

    const basketTotal = useSelector(selectBasketTotal);


    if(items.length === 0){
      return null;
    }
    const onPressHandler = () =>{
        navigation.navigate('Basket');
    }

  return (
    <View style = {styles.MainView}>
      <TouchableOpacity onPress={onPressHandler} style = {styles.touchable}>
        <Text style = {styles.lengthText}>{items.length}</Text>
        <Text style = {styles.ViewBasket}>View Basket</Text>
        <Text style = {styles.Total}>{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;

const styles = StyleSheet.create({
    ViewBasket : {
        flex : 1 , 
        fontWeight : 'bold' , 
        fontSize : 18 , 
        textAlign : 'center' , 
        color : 'white'
    },


    lengthText : {
        fontWeight : 'bold' ,
        fontSize : 20, 
        color : 'white' , 
        backgroundColor : '#01A296' , 
        paddingVertical : 1 , 
        paddingHorizontal : 5
    },
    Total : {
        fontWeight : 'bold' ,
        fontSize : 17, 
        color : 'white' ,
    },
    MainView : {
        position : 'absolute',
        bottom : 10 , 
        width : '100%', 
        zIndex : 50
    },
    touchable : {
        flexDirection : 'row' , 
        marginHorizontal : 15 , 
        backgroundColor : '#00CC88' , 
        padding  : 15 , 
        borderRadius : 10 , 
        alignItems : 'center' , 
        letterSpacing : 2
    }
})

