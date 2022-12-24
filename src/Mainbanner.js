import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import axios from "axios";

export default function Mainbanner() {
    const [data, setData] = useState([])
    const Appurl = 'https://wpr.intertoons.net/kmshoppyadmin/'

    useEffect(() => {
        axios.get('https://wpr.intertoons.net/kmshoppyapi/api/v2/Products/HomeProducts')
            .then((response) => {
                // console.log(response,'response******')
                setData(response?.data?.Data?.MobileMainBanners)
            })
            .catch((error) => {
                console.log(error, 'error**')
            })
    }, [])
    return (
        <View style={styles.banner}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({ item }) => {
                    return (

                        <Image style={styles.image}
                            source={{ uri: 'https://wpr.intertoons.net/kmshoppyadmin/' + item?.imageUrl }}></Image>


                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 170,
        marginLeft: 10,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    image: {
        width: 250,
        height: 170,
        marginLeft: 10,
        marginTop: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
})