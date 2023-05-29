import { View, Text, Image, TouchableOpacity , StyleSheet } from 'react-native'
import React ,{useState}from 'react'
import { urlFor } from '../sanity';
import { MinusCircleIcon , PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../Features/BasketSlice';

const DishRow = ({id,name,short_desc,price,image}) => {
    const [isPressed , setIsPressed] = useState(false);

   
    const items = useSelector((state) => selectBasketItemsWithId(state , id));
    const dispatch = useDispatch();
    const addItemsToBasket = () =>{
        dispatch(addToBasket({id,name,short_desc,price,image}));
    }
    
   // console.log(items);

    const removeItemFromBasket = ()=>{
       if(
       !items.length > 0
       ){
        return;
       }

        dispatch(removeFromBasket({id}))
    }


   /*  console.log(name);
    console.log(id);
    console.log(price); */
  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} style = {styles.touchable}>
        <View style = {styles.outerView}>
            <View style = {styles.innerView}>
            <Text style = {styles.name}>{name}</Text>
            <Text style = {styles.description}>{short_desc}</Text>
            <Text style = {styles.currency}>PKR . {price}</Text>
            </View>
            
        
             <View>
             <Image style = {styles.image} source={{uri : urlFor(image).url()}}></Image>
             </View>
           
             </View>
    </TouchableOpacity>

    {isPressed && 
    
    <View style = {styles.incrementOuterView}>
        <View style = {styles.incrementInnerView}>
            <TouchableOpacity disabled = {!items.length} onPress={removeItemFromBasket}>
                <MinusCircleIcon  color={ items.length > 0 ? '#00CC88' : 'grey'} size = {40}>
                 </MinusCircleIcon>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity  onPress={addItemsToBasket}>
                <PlusCircleIcon color={ items.length > 0 ? '#00CC88' : 'grey'}  size = {40}>
                 </PlusCircleIcon>
            </TouchableOpacity>

        </View>
    </View>
    
    }
    </>
  )
}

export default DishRow;

const styles = StyleSheet.create({

    incrementOuterView : {
        backgroundColor : 'white',
        paddingHorizontal : 10

    },
    incrementInnerView : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingBottom : 6,
    },
    outerView : {
        flexDirection : 'row'
    },
    innerView : {
        flex : 1,
        order : 2
    },
    touchable : {
     backgroundColor : 'white',
     border : 1 , 
     paddingTop : 5
    },
    image : {
        width : 100 , 
        height : 100
    },
    currency : {
        color : 'red'
    },
    name : {
        marginBottom : 5,
        fontSize : 20
    },
    description : {
        color : 'grey',
    }
})