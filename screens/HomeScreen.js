import { View, Text, SafeAreaView, Image , StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect , useEffect , useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon , UserIcon , SearchIcon , AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import { Feather } from '@expo/vector-icons'; 
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';
import client from '../sanity';



const HomeScreen = () => {

    const [featuredRows , setFeaturedRows] = useState([]);

    const navigation = useNavigation();

    useLayoutEffect(()=>{
       navigation.setOptions({
        headerShown : false
       })

    },[]);
    useEffect(()=>{
       client.fetch(`
       *[_type== "featured"]{
        ...,
        resturants[]-> {
            ...,
            dish[]->
        }
       }
       `).then((data)=> {
        setFeaturedRows(data);
       })
    },[]);

   // console.log(featuredRows);

  return (
    <SafeAreaView style = {styles.safeArea}>
    
        {/*  Nav */}
    

    <View style = {styles.container}>
    <Image style = {styles.image} source={{ uri : 'https://links.papareact.com/wru'}}>

    </Image>
    
    <View style = {styles.textView}>
        <Text style = {styles.deliverText}>Deliver Now</Text>
        <Text style = {styles.locationText}>Current Location
       <ChevronDownIcon size={20} color = '#00CC88'></ChevronDownIcon>
        </Text>
    </View>
    <UserIcon style = {styles.userIcon} size={35} color = '#00CC88'> </UserIcon>
    </View>
{/*    {/*  {/* Search */}


       {/* <View style = {styles.searchArea}>
        <View  style = {styles.searchContainer}>
         <Feather name='search' size={24} color = '#00CC88'></Feather>
         <TextInput placeholder='Resturant and Cuisine' keyboardType='default'></TextInput>
        </View>
        <AdjustmentsVerticalIcon color='#00CC88'></AdjustmentsVerticalIcon>
       
      </View> */}
      <View style = {styles.searchArea}>
        <View  style = {styles.searchContainer}>
         <Feather name='search' size={24} color = '#00CC88'></Feather>
         <TextInput placeholder='Resturant and Cuisine' keyboardType='default'></TextInput>
        </View>
        <AdjustmentsVerticalIcon color='#00CC88'></AdjustmentsVerticalIcon>
       
      </View>
      {/*  Body  */}

      <ScrollView style = {styles.scrollContainer}>

         {/* Categories Component  */}
         <Categories></Categories>
         

         {/* Featured Rows Component  */}

         { featuredRows?.map(category => (
            <FeaturedRows
                key = {category._id} id = {category._id} title = {category.name} description = {category.short_description}
            ></FeaturedRows>
         ))}
      </ScrollView>

      

    
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    scrollContainer : {
        //backgroundColor : '#98b3bd'
    }
    ,
    container : {
       
        flexDirection : 'row',
        padding  : 5,
       // backgroundColor : '#A8c7d2',
        width : '100%',
       
    },
    image:{
        width : '15%',
        height : 50 , 
        borderRadius : 30,
        padding: 5,
    },
    textView : {
       flex : 1,
        marginLeft : 10  
        
    },
    deliverText : {
        fontSize : 10 , 
        color : '#9da7aa',
        fontWeight : 'bold'
    },
    locationText : {
        fontWeight : 'bold',
        fontSize : 15
    }, 
    safeArea : {
        backgroundColor : '#F7fafb'
    },
    searchContainer : {
        backgroundColor : '#Dcebee',
        flexDirection : 'row',
        padding : 10,   
        flex : 1
    } , 
    searchArea : {
        padding : 6,
        width : '100%',
        marginHorizontal : 4,
        alignItems : 'center',
        backgroundColor : '#f7fafc',
        flexDirection : 'row' , 
        
    } , 
    userIcon : {
        marginLeft : 100
    }
});