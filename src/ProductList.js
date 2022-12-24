import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, TouchableHighlight } from "react-native";
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector,useDispatch } from "react-redux";

import {addProducts, removeProducts} from './redux/Actions'

export default function ProductList() {
    const navigation= useNavigation()
    const Appurl = 'https://wpr.intertoons.net/kmshoppyadmin/'
    const [datas, setDatas] = useState(null)
    const Dispatch= useDispatch();

    const items = useSelector(state=>state)
    const addItem = item =>{
        Dispatch(addProducts(item))
    };
    const removeItem = productId =>{
        Dispatch(removeProducts(productId))
    }
    useEffect(() => {
        axios.get("https://wpr.intertoons.net/kmshoppyapi/api/v2/FeaturedProduct?custId=''&guestId='",{
            headers :
            { vendorUrlKey: 'kmshoppy' }
     })
            .then((response) => {
                // console.log(response, 'response******')
                setDatas(response?.data?.Data)
            })
            .catch((error) => {
                console.log(error, 'error**')
            })

    }, [])

    return (
        <View style={{ height:250}}>
            <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Featured products</Text>
                <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', marginLeft: 110 }}>See More</Text>
            </View>
            <View >
          <FlatList 
            style={{marginRight:25}}
               showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={datas}
                renderItem={({ item,index}) => {
                    return (
                        <View style={styles.productbar}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginTop:30,marginLeft:20}}>
                                    <Icon name="favorite" size={20} color={'red'} ></Icon>
                                </View>
                            <View style={styles.circle}>
                                <Text style={{color:'white',fontWeight:'bold'}}>3% Off</Text>
                            </View>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <TouchableHighlight
                                onPress={()=>navigation.navigate('Productdetails',{
                                    pIName:item.prName,
                                    date:item.prDate,
                                    image: 'https://wpr.intertoons.net/kmshoppyadmin/' + item ?.imageUrl,
                                    weight:item.prWeight,
                                    price:item.unitPrice
                                })}
                                underlayColor='transparent'>
                           <Image style={{width:70,height:70}}
                           source={{uri:'https://wpr.intertoons.net/kmshoppyadmin/' + item ?.imageUrl}}/>
                           </TouchableHighlight>
                           
                           <Text style={{fontSize:9,marginTop:15,color:'black',fontWeight:'bold'}}>{item.prName} </Text>
                           <Text style={{fontSize:10,marginTop:5,color:'black',fontWeight:'bold'}}>₹{item.unitPrice}</Text>
                           <View style={{flexDirection:'row'}}>
                           <Text style={{fontSize:10,marginTop:5,color:'red'}}>{item.stockAvailability}</Text>
                           <View style={{width:20,height:20,borderRadius:6,marginLeft:40,backgroundColor:'#dbd9e1',justifyContent:'center',alignItems:'center'}}>
                            <TouchableHighlight 
                            onPress={()=>{addItem(item)}}>
                           <Icon name="add" size={18} color={'red'}></Icon>
                           </TouchableHighlight>
                           </View>
                           </View>
                           </View>
                        </View>
                    )
                }}
            />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    productbar: {
        height: 200,
        width:170,
        marginLeft: 10,
        borderRadius: 8,
        marginTop: 10,
        elevation:6,
        marginRight:14,
        backgroundColor:'white'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 90,
        backgroundColor:'#c32def',
        alignItems:'center',
        justifyContent:'center'

    },
})