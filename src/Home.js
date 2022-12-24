import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Mainbanner from "./Mainbanner";
import ProductList from "./ProductList";
export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);




  return (
    <View style={styles.container}>
      <View style={styles.headbar}>
        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
          <View style={{ marginLeft: 20 }}>
            <Icon name="place" size={22} color='white'></Icon>
          </View>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginLeft: 10 }}>Choose Location</Text>
          <View style={{ marginLeft: 10 }}>
            <Icon name="expand-more" size={22} color='white'></Icon>
          </View>
        </View>
        <View style={{ marginTop: 10, width: '95%', paddingLeft: 25 }}>
          <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery} />
        </View>
      </View>
      <ScrollView>
     <Mainbanner/>
     <ProductList/>


      <View style={styles.bottombar}>
        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 18 }}>
          <Icon name="local-shipping" size={20} color={'green'}></Icon>
          <View style={{ marginLeft: 4 }}>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>Get things delivered to </Text>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>your doorstep</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ fontSize: 20, color: 'green', }}>₹</Text>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>No minimum order value </Text>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>on your purchase</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Icon name="hourglass-top" size={20} color={'green'}></Icon>
          <View style={{ marginLeft: 4 }}>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>Operational hours: </Text>
            <Text style={{ color: 'green', fontFamily: 'monospace', fontWeight: 'bold', color: '#c32def' }}>08:00 AM - 10:00 PM</Text>
          </View>



        </View>

      </View>
    </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:"100%",
    backgroundColor:'white',
    
  },
  headbar: {
    width: '100%',
    height: 110,
    backgroundColor: 'cyan'
  },


  bottombar: {
    width: 350,
    height: 155,
    marginTop: 15,
    marginLeft: 20,
    elevation: 1,
    borderRadius: 8,
    backgroundColor: '#f0f1f1',
    marginBottom:10

  },



})