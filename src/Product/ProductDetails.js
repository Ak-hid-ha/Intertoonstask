import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text ,StyleSheet, TouchableOpacity,Image, ScrollView, TouchableHighlight, FlatList} from "react-native";
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch,useSelector } from "react-redux";
import { addProducts } from "../redux/Actions";


export default function ProductDetails({route}){

    const [value,setvalue]= useState(null)
    const navigation= useNavigation()
    const {pIName}=route.params;
    const {date} =route.params;
    const {image} =route.params;
    const {weight} =route.params;
    const {price} =route.params;
    const Dispatch= useDispatch();
    
    const items = useSelector(state=>state)
    const addItem = item =>{
        Dispatch(addProducts(item))
    };
  
    useEffect(()=>{
        axios.get("https://wpr.intertoons.net/kmshoppyapi/api/v2/ProductDetails?urlKey=greenchef-lpg-stove-glass-top-crystal-3-burner&custId=%27%27&guestId=4653631114&pincode=%27kmshoppy%27&vendorUrlKey=%27kmshoppy%27",{
        
            headers :
            { vendorUrlKey: 'kmshoppy' }
}).then((response)=>{
    console.log(response,'response***********')
    setvalue(response?.data?.Data?.catList)
}).catch((error)=>{
    console.log(error,"error**")
})
},[])
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{flexDirection:'row',height:70,width:'90%',backgroundColor:'cyan',marginLeft:20,marginTop:20,borderRadius:9}}>
                <TouchableHighlight
                onPress={()=>navigation.goBack()}
                underlayColor='transparent'>
                <Icon name="arrow-back" size={24} color='black' style={{marginLeft:10,marginTop:20}}/>
                </TouchableHighlight>
                <Icon name="search" size={24} color='black' style={{marginLeft:240,marginTop:20}} />
                <View style={{flexDirection:'row'}}>
                <TouchableHighlight
                onPress={()=>navigation.navigate('cart')}
                underlayColor='transparent'>
                <Icon name="shopping-cart" size={24} color='black' style={{marginLeft:20,marginTop:20}}/>
                </TouchableHighlight>
                <Text style={{marginTop:20}}>{items.length}</Text>
                </View>
            </View>

            <View style={styles.productbar}>
            <TouchableOpacity style={{left:310,marginTop:20}}>
                <Icon name="favorite" size={26} color='red'  />
                </TouchableOpacity>
        
            <Image style={{width:140,height:150,marginTop:5,marginLeft:130}} source={{uri:image}}/>
            
            <Text style={{marginTop:30,fontSize:20,color:'black',fontWeight:'bold',marginLeft:5}}>{pIName} , {date}</Text>
            <Text style={{marginTop:3,color:'gray',fontWeight:'bold',fontSize:16,marginLeft:5}}>{weight}</Text>
            <Text style={{marginTop:3,color:'black',fontWeight:'bold',fontSize:20,marginLeft:10}}>₹{price}</Text>
      </View>

            <View style={styles.subbar}>
                <View >
            <Text style={{marginTop:30,fontSize:12,color:'black',fontWeight:'bold',marginLeft:5}}>{pIName}</Text>
            <Text style={{marginTop:3,color:'black',fontWeight:'bold',fontSize:20,marginLeft:10}}>₹{price}</Text>
            </View>
            <TouchableHighlight style={{alignItems:'center',justifyContent:'center',borderRadius:8,width:70,height:40,marginTop:30,marginLeft:20,backgroundColor:'red'}}
            onPress={(item)=>addItem(item)}>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Add</Text>
            </TouchableHighlight>
            </View>
            <Text style={{marginTop:20,fontWeight:'bold',color:'black',fontSize:20}}>Similar Products</Text>
            <FlatList
            horizontal
            data={value}
            renderItem={({item})=>{
                return(
                    <View style={styles.productbar1}>
                        <View>
                        <Image
                        style={{width:80,height:80,marginLeft:10}} source={{uri:'https://wpr.intertoons.net/kmshoppyadmin/assets/images/uploads/productimages/no-image.jpg'}}></Image>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>{item.catName}</Text>
                        <Text>{item.catUrlKey}</Text>
                        </View>
                    </View>
                )
            }}/>
            
            </View>
            
        </ScrollView>
        
    )
}

const styles=StyleSheet.create({
    container:{
        height:1200,
        width:'100%',
        backgroundColor:'white'
    },
    productbar:{
      height:340,
      width:'100%',
      marginTop:10
    },
    subbar:{
        height:100,
        width:'100%',
        elevation:8,
        flexDirection:'row',
        backgroundColor:'#dbd9e1'
    },
    listbar:{
        height:100,
        width:'100%',
        elevation:5,
        
    },
    productbar1: {
        height: 200,
        width:170,
        marginLeft: 10,
        borderRadius: 8,
        marginTop: 10,
        elevation:4,
        marginRight:14,
        alignItems:'center',
        justifyContent:'center'
    },
})