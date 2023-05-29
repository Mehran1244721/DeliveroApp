import { View, Text , StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';
import client from '../sanity';

const FeaturedRows = ({id , title , description}) => {

     const [resturants , setResturants] = useState([]);

   useEffect(()=>{
      client.fetch(`
      *[_type== "featured" && _id == $id]{
        ...,
        resturants[]-> {
            ...,
            dishes[]->,
            type->{
              name
            }
        },
       }[0]
      `, {id}).then(data=>{
       // console.log(data);
        setResturants(data?.resturants);
      })

   },[]);
  
  // console.log(resturants);


  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.text}>{title}</Text>
        <ArrowRightIcon color='#00CC88'></ArrowRightIcon>
      </View>
      <Text style = {styles.desc}>{description}</Text>

      <ScrollView style = {styles.scroll} horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{paddingHorizontal : 25}}>
         {/* Resturants Cards */}

         {resturants?.map(resturant =>(
  
  <ResturantCard 
  key={resturant._id} 
  id = {resturant._id} 
  imageUrl = {resturant.image}
   title = {resturant.name}
    rating = {resturant.rating} 
    genre = {resturant.type?.name}
    address = {resturant.address}
    short_desc = {resturant.short_description}
     dishes = {resturant.dishes} 
     long = {resturant.long}
      lat={resturant.lat}>

         </ResturantCard>


         ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRows;

const styles = StyleSheet.create({
    scroll : {
        paddingTop : 8
    }
    ,
    desc : {
        fontSize : 10,
        color : '#B5a9d0',
        paddingHorizontal : 6
    }
    ,
    text : {
        fontWeight : 'bold',
        fontSize : 20
    }
    ,
    container : {
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center' , 
        paddingHorizontal : 4 ,
        marginTop : 10
    }
})