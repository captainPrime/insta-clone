import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
      <TouchableOpacity>
        <Image style={styles.icons}
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png"}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.unreadBadgeLikes}></View>
        <Image style={styles.icons}
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png"}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>
20
          </Text>
        </View>
        <Image style={styles.icons}
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png"}}
        />
      </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
  },

  iconsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 20 
  },

  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
    marginTop: 10
  },

  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    top: 0,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    zIndex: 100
  },

  unreadBadgeLikes: {
    backgroundColor: 'red',
    position: 'absolute',
    right: 3,
    bottom: 18,
    width: 8,
    height:8,
    top: 9,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    zIndex: 100
  },

  unreadBadgeText:{
    color: '#ffffff',
    fontWeight: '600'
  }
})
export default Header