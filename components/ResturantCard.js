import { View, Text, TouchableOpacity, Image , StyleSheet } from 'react-native'
import React from 'react';
import { StarIcon} from 'react-native-heroicons/solid';
import { Entypo } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import {useNavigation} from '@react-navigation/native';

const ResturantCard = ({id,imageUrl,title,rating,genre,address,short_desc,dishes,long,lat}) => {
  
  const navigation = useNavigation();
  
    return (
    <TouchableOpacity  onPress={()=>{
        navigation.navigate('Resturant',{
            id,imageUrl,title,rating,genre,address,short_desc,dishes,long,lat 
        });
    }}   >
      <Image style = {styles.image} source={{uri :  urlFor( imageUrl).url()}}>

      </Image>
      <View style = {styles.outer}>
        <Text style = {styles.title}>{title}</Text>
        <View style = {styles.ratingCont}>
         <StarIcon color='green' size={22} opacity ={0.5} ></StarIcon>
         <Text style = {styles.outerTxt}>
            <Text style = {styles.ratingTxt}>{rating}</Text> . {genre}
         </Text>
        </View>
        <View style = {styles.locationCont}>
        <Entypo name="location-pin" size={22} opacity = {0.4} color="grey" />
        <Text style = {styles.addressTxt}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard;

const styles = StyleSheet.create({

    image : {
        height : 100 , 
        width : 124 , 
    },
    title : {
        fontWeight : 'bold' , 
        fontSize : 15
    },
    outer : {
        paddingHorizontal : 4 , 
        paddingBottom : 4
    },
    ratingCont : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    ratingTxt : {
        color : 'green'
    },
    outerTxt : {
        fontSize : 10,
        color : 'grey'
    },
    locationCont : {
        flexDirection : 'row' , 
        alignItems : 'center'
    },
    addressTxt : {
        fontSize : 11,
        color : 'grey'
    }
})