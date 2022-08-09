import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import Header from '../components/home/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})



export default HomeScreen