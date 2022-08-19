import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
                <Image source={{ uri: post.profile_picture }} style={styles.storyImage} />
                <Text style={{ color: "white", marginLeft: 5, fontWeight: '700' }}>
                    {post.user}
                </Text>
            </View>
            <View style={{}}>
                <TouchableOpacity>
                    <Text style={{ color: "white", fontWeight: '900' }}>...</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const PostImage = ({ post }) => {
    return (
        <View style={{ width: '100%', height: 450 }}>
            <Image source={{ uri: post.imageURL }} style={{ height: '100%', resizeMode: 'cover' }} />
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