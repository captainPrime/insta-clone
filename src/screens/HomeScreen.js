import React from 'react'
//import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native"
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/post'
import { SafeAreaProvider } from 'react-native-safe-area-context';

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