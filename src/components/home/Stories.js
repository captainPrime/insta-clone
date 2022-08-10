import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/dummy'

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, marginTop: 6 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          USERS.map((story, index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <Image source={{ uri: story.image }} style={styles.storyImage} />
              <Text style={{ color: 'white',  marginTop: 5 }}>
                {story.username.length > 11
                  ? story.username.slice(0, 10).toLocaleLowerCase + '...'
                  : story.username.toLocaleLowerCase()}
              </Text>
            </View>

          ))
        }
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#ff8501',
  }
})

export default Stories