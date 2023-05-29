import { View, Text, SafeAreaView , StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectResturant } from '../Features/ResturantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView , {Marker} from 'react-native-maps';
const DeliveryScreen = () => {

    const navigation = useNavigation();
    const resturants = useSelector(selectResturant);

  return (
    <View style = {styles.mainView}> 
      <SafeAreaView style = {styles.safe}>
        <View style = {styles.secondView}>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
                <XMarkIcon size={30} color = 'white'></XMarkIcon>
            </TouchableOpacity>
            <Text style = {styles.orderTxt}>Order Help</Text>
        </View>
        <View style = {styles.mainTextView}>
          <View style = {styles.imageText}>
          <View>
            <Text style = {styles.estimateText}>
             Estimated Arrival
            </Text>
            <Text style = {styles.timeText}>
              45-55 Minutes
            </Text>
          </View>
          <Image style = {styles.imageStyle} source={{uri : "https://links.papareact.com/fls"}}>

          </Image>
          </View>
          <Progress.Bar size = {30} color = '#00CCBB' indeterminate = {true}></Progress.Bar>
          <Text style = {styles.orderText}>Your Order at {resturants.title} is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView initialRegion={
        {latitude : resturants.lat , longitude : resturants.long , latitudeDelta : 0.005 , longitudeDelta : 0.005}

      }
      style = {styles.map} mapType = "mutedStandard"
      >
       <Marker coordinate={{latitude : resturants.lat , longitude : resturants.long }} title = {resturants.title} description = {resturants.short_description} identifier = "origin" pinColor='#00CCBB'></Marker>
      </MapView>
      <SafeAreaView style = {styles.safeAreaBottom}>
       <Image style = {styles.bottomPic} source={{uri : 'https://links.papareact.com/wru'}}></Image>
       
       <View style = {styles.bottomPicText}>
          <Text style = {styles.Mehran}>Mehran Khan</Text>
          <Text style = {styles.Rider}>Your Rider</Text>
       </View>
       <Text style = {styles.call}>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen;

const styles = StyleSheet.create({
  call : {
    color : '#00CCBB' , 
    marginRight : 10 , 
    fontSize : 20
  },
  Mehran : {
    fontSize : 19 , 
    fontWeight : 'bold' , 
    
  },
Rider : {
  color : 'grey'
},
  bottomPicText : {
    flex : 1 , 
    marginLeft : 15
  },
  
  bottomPic : {
    width : 50 , 
    height : 50 ,
    borderRadius : 80 , 
    marginTop : 20 , 
    marginLeft : 10 , 
    padding : 5
  },
  
  safeAreaBottom : {
    backgroundColor : 'white' , 
    flexDirection : 'row' , 
    alignItems : 'center' , 
    height : 70
  },
  
  map : {
    flex : 1 , 
    marginTop : -40 , 
    zIndex : 0,
  },
  
  orderText : {
    marginTop : 10 , 
    color : 'grey'
  },
imageText : {
  flexDirection : 'row' , 
  justifyContent : 'space-between'
},
  imageStyle : {
    width : 100 , 
    height : 100
  },
mainTextView : {
  marginHorizontal : 15 , 
  marginVertical : 20 , 
  backgroundColor : 'white' , 
  borderRadius : 10 , 
  zIndex : 50 , 
  padding : 19
},
  estimateText : {
    fontSize : 20 , 
    fontWeight : 'bold' , 
    color : 'grey'
  },
  timeText : {
    fontSize : 30 , 
    fontWeight : 'bold' , 
    color : 'black'
  },
    orderTxt : {
        opacity : 0.9,
        color : 'white'
    },
    secondView : {
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        padding : 5 , 
        alignItems : 'center'
    },
    safe : {
        zIndex : 50
    },
    mainView : {
        flex : 1 , 
        backgroundColor : '#00CCBB' , 

    }

});