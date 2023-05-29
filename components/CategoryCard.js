import { View, Text , TouchableOpacity , Image , StyleSheet } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';

const CategoryCard = ({imageUri , title}) => {
  return (
    <TouchableOpacity style = {styles.mainContainer}>
    <Image style = {styles.image} source={{uri : urlFor( imageUri).url()}}></Image>
    <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;

const styles = StyleSheet.create({
    image : {
        width : 100,
        height : 100,
        borderRadius : 20
    } , 
    text : {
        position : 'absolute' , 
        bottom : 1,
        color : 'white',
        fontWeight : 'bold'

    },
    mainContainer : {
        position : 'relative' , 
        marginRight : 2
    }
});