import React from 'react'
//import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native"
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/post'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from '../components/home/BottomTab'
import { BottomIcons } from '../assets/icons'

const HomeScreen = () => {
  return (

    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {
          POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))
        }

      </ScrollView>

      <BottomTab icons={BottomIcons} />
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