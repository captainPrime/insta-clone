import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
                <Image source={{ uri: post.profile_picture }}  style={styles.storyImage}/>
                <Text style={{color: "white", marginLeft: 5,  fontWeight: '700'}}>
                    {post.user}
                </Text>
            </View>
            <View style={{}}>
                <Text style={{color: "white",  fontWeight: '900' }}>...</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    storyImage: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 10,
      borderWidth: 3,
      borderColor: '#ff8501',
    }
}) 

export default Post