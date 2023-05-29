import { View, Text, ScrollView, Image , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronDoubleRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { StarIcon , ChevronRightIcon } from 'react-native-heroicons/solid';
import { Entypo } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setResturant } from '../Features/ResturantSlice';

const ResturantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {params : {
        id,imageUrl,title,rating,genre,address,short_desc,dishes,long,lat
    }} = useRoute();


  useEffect(()=>{
   dispatch(setResturant({
    id,imageUrl,title,rating,genre,address,short_desc,dishes,long,lat
   }))

  },[]);


  useLayoutEffect(()=>{

    navigation.setOptions({
        headerShown : false
    })
  },[]);

 // console.log(dishes);

  return (
    <>
    <BasketIcon></BasketIcon>
    <ScrollView>
      <View style = {styles.main}>
        <Image style ={styles.image} source={{uri : urlFor( imageUrl).url()}}></Image>

        <TouchableOpacity onPress={navigation.goBack} style = {styles.icon}>
            <ArrowLeftIcon size={20} color = '#00CC88'></ArrowLeftIcon>
        </TouchableOpacity>
      </View>
      <View style = {styles.second}>
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>{title}</Text>
            <View style = {styles.info}>
              <View style = {styles.ratingCont}>
                <StarIcon size={22} color = 'green' opacity={0.5}></StarIcon>
                <Text style = {styles.outerTxt}>
            <Text style = {styles.ratingTxt}>{rating}</Text> . {genre}
              </Text>
              </View>
              <View style = {styles.ratingCont}>
              <Entypo name="location-pin" size={22} opacity = {0.4} color="grey" />
                <Text style = {styles.outerTxt}>Nearby . {address}
              </Text>
              </View>
            </View>
            <Text style = {styles.desc}>{short_desc}</Text>
        </View>
        <TouchableOpacity style = {styles.touchOpacity}>
            <QuestionMarkCircleIcon size={20} opacity = {0.6} color = 'grey'></QuestionMarkCircleIcon>
            <Text style = {styles.alleryText}>
                Have a Food Allergy ?
            </Text>
            <ChevronDoubleRightIcon color='#00CC88'></ChevronDoubleRightIcon>
        </TouchableOpacity>
        </View>
        

        <View style = {styles.menuView}>
          <Text style = {styles.menuText}>
            Menu
          </Text>
          {/* Dishes Rows */}

          

           {dishes.map( dish => (
             <DishRow
              key={dish._id}
              id = {dish._id}
              name = {dish.name}
              short_desc = {dish.short_description}
              price = {dish.price}
              image = {dish.image}
             />

             
          ))} 

        </View>
      
    </ScrollView>
    </>
  )
}

export default ResturantScreen;

const styles = StyleSheet.create({
menuView : {
  backgroundColor : 'white',
  paddingBottom  : 50
},
  menuText : {
    paddingHorizontal : 20,
    paddingTop : 10 , 
    marginBottom : 3,
    fontWeight : 'bold' , 
    fontSize : 20
  },
    alleryText : {
        flex : 1,
        paddingLeft : 10,
        fontWeight : 'bold',
        fontSize : '15',
        textAlign : 'center'
    },
    touchOpacity : {
        flexDirection : 'row',
        paddingTop : 15
    },
    image : {
        width : '100%' , 
        height : 300
    },
    main : {
        position : 'relative'
    },
    second : {
      backgroundColor : 'white'
    },
    icon : {
        //paddingTop : 50 , 
        top : 50,
        left : 25,
        padding : 2,
        //paddingLeft : 15,
        position : 'absolute',
        backgroundColor : 'grey',
        borderRadius : 20 
    },
    textContainer : {
        paddingHorizontal : 30 , 
        paddingTop : 20,

    },
    text : {
       fontSize : 30, 
       fontWeight : 'bold'
    },
    info : {
     flexDirection : 'row',
     letterSpacing : '2',
     marginVertical : 1
    },
    ratingCont : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    ratingTxt : {
        color : 'green'
    },
    outerTxt : {
        fontSize : 11,
        letterSpacing : 2,
        color : 'grey'
    },
    desc : {
       marginTop : 2 , 
       paddingBottom : 4,
       color : 'grey'
    },
})