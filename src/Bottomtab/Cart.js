import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {View,Text, TouchableOpacity, FlatList,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch,useSelector } from "react-redux";
import { removeProducts } from "../redux/Actions";


export default function Cart(){
    const[total,settotal]=useState(null)
    const getTotal = items =>{
        let total=0;
        for(let index=0;index<items.length;index++){
            let productprice=items[index].unitPrice;
            total=total+productprice;
        }
        settotal(total)
    }
    
    const navigation= useNavigation()
    const items = useSelector(state=>state)
    const Dispatch= useDispatch()
    const removeItem = productId =>{
        Dispatch(removeProducts(productId))
    }
   if(items.length>0) {
    return(
    <View style={{flex:1}}>
    <TouchableOpacity
    onPress={()=>{navigation.goBack()}}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:20,marginLeft:10}}>
                <Icon name="arrow-back-ios" size={24} color='black'/>
            </View>
            <Text style={{fontSize:20,color:'black',marginTop:18}}>Cart</Text>
            <Text style= {{fontSize:20,color:'black',marginTop:18}}>({items.length})</Text>
        </View>
    </TouchableOpacity>
    <FlatList
    data={items}
    renderItem={({item,index})=>{
        return(
            <View style={{
                width:'90%',
                borderRadius:15,
                marginTop:10,
                borderWidth:1,
                borderColor:'#8e8e8e',
                flexDirection:'row',
                backgroundColor:'white',
                marginLeft:15
            }}>
                <View style={{flexDirection:'row'}}>

                <View style={{marginTop:20,marginLeft:30}}>
                    <Text style={{marginBottom:5,fontWeight:'bold',fontSize:15,color:'red'}}>{item.prName}</Text>
                    <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>
                        ₹{item.unitPrice}
                    </Text>
                <TouchableOpacity
                style={{
                    height:30,
                    borderRadius:10,
                    width:100,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'cyan',
                    marginTop:20
                }}
                onPress={()=>{
                    removeItem(item.productId)
                }}>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Remove</Text>
                </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:'row',position:'absolute',right:30}}>
            <Image 
            source={{uri:'https://wpr.intertoons.net/kmshoppyadmin/' + item ?.imageUrl}}
            style={{width:100,height:100,
            marginTop:15}}></Image>
                </View>
                 </View>
        )
    }}/>
    </View>
)}else{
    return(
        <View style={{flex:1}}>
    <TouchableOpacity
    onPress={()=>{navigation.goBack()}}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:20,marginLeft:10}}>
                <Icon name="arrow-back-ios" size={24} color='black'/>
            </View>
            <Text style={{fontSize:20,color:'black',marginTop:18}}>Cart</Text>
            <Text style= {{fontSize:20,color:'black',marginTop:18}}>({items.length})</Text>
        </View>
    </TouchableOpacity>
    <View>
        <Text style={{marginTop:200,marginLeft:80,fontSize:40,color:'black',fontWeight:'bold'}}>Cart Is Empty</Text>
    </View>
    </View>
    )
}}