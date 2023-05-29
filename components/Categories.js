import { ScrollView, Text , StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import client from '../sanity';

const Categories = () => {

  const [categories , setCategories] = useState([]);

  useEffect(()=>{
    client.fetch(`
      *[_type == "category" ]
    
    `).then(data => {
      setCategories(data);
    })

  },[]);






  return (
    <ScrollView contentContainerStyle = {{ paddingHorizontal : 15  , paddingTop : 10}} style = {styles.text} horizontal showsHorizontalScrollIndicator = {false}>
  
      {categories.map(category =>(
        <CategoryCard key={category._id} imageUri = {category.image} title = {category.name}></CategoryCard>
      ))}
      
    </ScrollView>
  )
}

export default Categories;


const styles = StyleSheet.create({

  text : {
    color : '#F10919',
    //padding : 15,
   // margin : 5 
  }
})