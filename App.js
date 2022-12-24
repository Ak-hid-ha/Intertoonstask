import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Home from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "./src/Product/ProductDetails";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Cart from './src/Bottomtab/Cart';
import Category from './src/Bottomtab/Category';
import Profile from './src/Bottomtab/Profile';
import Search from './src/Bottomtab/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from "react-redux";
import { mystore } from "./src/redux/Store";


const stack= createStackNavigator();
const bottomtab = createMaterialBottomTabNavigator();

function Mystack(){
  return(
    <stack.Navigator>
      <stack.Screen component={Tab}
      name="tab"
      options={{headerShown:false}}/>
      <stack.Screen component={ProductDetails}
      name="Productdetails"
      options={{headerShown:false}}/>
      <stack.Screen component={Cart}
      name="cart"
      options={{headerShown:false}}/>
    </stack.Navigator>
  )
}
function Tab(){
  return(
    <bottomtab.Navigator>
      <bottomtab.Screen
      component={Home}
      name="Home"
      options={{
        tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='home' size={24} color='green'/>:
                <Icon name='home' size={24} color='grey'/>
      }}/>
      <bottomtab.Screen
      name="Category"
      component={Category}
      options={{
        tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='category' size={24} color='green'/>:
                <Icon name='category' size={24} color='grey'/>
      }}/>
      <bottomtab.Screen
      name="Cart"
      component={Cart}
      options={{
        headerShown:false,
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=> focused ?<Icon name="shopping-cart" size={24} color='green'/>:
        <Icon name="shopping-cart" size={24} color="grey"/>
      }}/>
      <bottomtab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=> focused ?<Icon name="search" size={24} color="green"/>:
        <Icon name="search" size={24} color="grey"/>
      }}/>
      <bottomtab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=> focused ?<Icon name="person" size={24} color="green"/>:
        <Icon name="person" size={24} color="gray"/>
      }}/>
    </bottomtab.Navigator>
  )
}

export default function App(){
  return(
    <Provider store={mystore}>
  <NavigationContainer>
    <Mystack/>
  </NavigationContainer>
      </Provider>
    
  )
}