import {Image, View, Text, SafeAreaView,StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo,useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../Features/ResturantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../Features/BasketSlice';
import {XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const [groupedItemsInBasket , setGroupedItemsInBasket] = useState([]);
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();


   console.log(items);


    useEffect(()=>{
       const groupedItems = items.reduce((results , item) => {
        (results[item.id] = results[item.id] || []).push(item); 
        return results;
        },{});

       setGroupedItemsInBasket(groupedItems);

    },[items]);

   // console.log(groupedItemsInBasket);



  return (
    <SafeAreaView style = {styles.safeArea}>
      <View style = {styles.OuterView}>
        <View style = {styles.inner}>
          <View>
            <Text style = {styles.basket}>Basket</Text>
            <Text style = {styles.title}>{resturant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} style = {styles.icon} > 
          <XCircleIcon height={50} width = {50} color = '#00CC88'></XCircleIcon>
          </TouchableOpacity>
        </View>
        <View style = {styles.delView}>
          <Image style = {styles.image} source={{uri : 'https://links.papareact.com/wru'}}></Image>
          <Text style = {styles.delText}> Deliver in 50-75 Minutes </Text>
          <Text style = {styles.changeText}> Change</Text>
        </View>

        <ScrollView style = {styles.scroll}>
          {Object.entries(groupedItemsInBasket).map(([key , items])=> (

            
           <View key={key} style = {styles.cartContainer}> 
           <Text style = {styles.itemLength}>{items.length} x</Text>
           <Image style = {styles.imageCart} source={{uri : urlFor(items[0]?.image).url()}}></Image> 
           <Text style = {styles.nameFood}>{items[0]?.name}</Text>
           <Text>PKR.{items[0]?.price}</Text>
           <TouchableOpacity>
            <Text style = {styles.removeText} onPress={()=> dispatch(removeFromBasket({id : key}))}>
               Remove
            </Text>
            </TouchableOpacity>          
           </View>

           ))}
        </ScrollView>

        <View style = {styles.bottomView}>
          <View style = {styles.textInfo}>
            <Text style = {styles.subtotal}>Subtotal</Text>
            <Text style = {styles.baskettotal}>{basketTotal}</Text>
          </View>

          <View style = {styles.textInfo}>
            <Text style = {styles.subtotal}>Delivery Fee</Text>
            <Text style = {styles.baskettotal}>199.9</Text>
          </View>
          <View style = {styles.textInfo}>
            <Text style = {styles.subtotalBlack}>Order Subtotal</Text>
            <Text style = {styles.baskettotalBlack}>{basketTotal + 199.9}</Text>
          </View>
          <TouchableOpacity onPress={()=> { navigation.navigate('PrepareOrder')}} style = {styles.placeOrderBtn}>
            <Text style = {styles.btnText}>Place Order</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  );
}

export default BasketScreen;

const styles = StyleSheet.create({
  btnText : {
    color : 'white' , 
    fontWeight : 'bold'
  },
  placeOrderBtn : {
    backgroundColor : '#00CC88' , 
    borderRadius : 20 , 
    padding : 6,  
    alignItems : 'center' , 
    marginTop : 10
  },
  bottomView : {
    paddingHorizontal : 20 , 
    backgroundColor : 'white',
    marginTop : 10
  },
  subtotal : {
    color : 'grey'
  },
  subtotalBlack : {
    color : 'black' , 
    fontWeight : 'bold'
  },
  baskettotal : {
    color : 'grey'
  },
  baskettotalBlack : {
    color : 'black',
    fontWeight : 'bold'
  },
  textInfo : {
    flexDirection : 'row' , 
    justifyContent  :'space-between' ,
    marginTop : 10
  },
  itemLength : {
    color : 'red' , 
    fontWeight : 'bold'
  },
  cartContainer : {
    flexDirection : 'row',
    justifyContent : 'center' , 
    paddingHorizontal : 20 , 
    paddingVertical : 60 , 

  },
  removeText : {
    color : '#00CC88',
    marginLeft : 15
  },
  nameFood : {
    flex : 1 , 
    marginLeft : 10
  },
  imageCart : {
    width : 60,
    height : 60 , 
    borderRadius : 50 ,
    marginTop : -20,
    marginLeft : 10 


  },
  delView : {
    flexDirection : 'row' , 
    alignItems : 'center' , 
    backgroundColor : 'white' , 
    paddingHorizontal : 4 , 
    paddingVertical : 3 , 
    marginVertical : 5
  },
 changeText : {
  color : '#00CC88'
 },
  delText : {
    flex : 1,
    marginLeft : 10
  }
  ,
  image : {
    height : 40, 
    width : 40 , 
    marginLeft : 10 , 
    marginTop : 10 

  },
  
  
  inner : {
    padding : 10 , 
    borderBottomWidth : 1 , 
    borderColor : '#00CC88' , 
    backgroundColor : 'white',
  },
  safeArea : {
    flex : 1 , 
    backgroundColor : 'white'
  },
  OuterView : {
      flex : 1 , 
      backgroundColor : '#C8d8de'
  }, 
  icon : {
    top : 3 , 
    right : 5 , 
    position : 'absolute'
  },
  basket : {
   fontWeight : 'bold' , 
   fontSize : 18 , 
   textAlign : 'center'
  } , 
  title : {
     textAlign : 'center' , 
     color : 'grey'
  }
})