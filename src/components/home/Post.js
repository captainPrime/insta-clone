import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'
import { icons } from '../../assets/icons'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
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

const PostFooter = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
                <Icon imgStyle={styles.footerIcon} imgUrl={icons[0].imageURL}></Icon>
                <Icon imgStyle={styles.footerIcon} imgUrl={icons[1].imageURL}></Icon>
                <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgUrl={icons[2].imageURL}></Icon>
            </View>
            <View style={{}}>
                <TouchableOpacity>
                    <Icon imgStyle={[styles.footerIcon, styles.lastIcon]} imgUrl={icons[3].imageURL}></Icon>
                </TouchableOpacity>
            </View>
        </View>


    )

}

const Icon = ({ imgStyle, imgUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={{ uri: imgUrl }} />
        </TouchableOpacity>

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

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "white", fontWeight: '600' }}>
            {post.likes.toLocaleString()} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user} </Text>
            <Text>{post.caption}</Text>
        </Text>
    </View>

)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {
            !!post.comments.length && (
                <Text style={{ color: 'gray' }}>
                    View {post.comments.length > 1 ? 'all ' : ''}{post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
                </Text>
            )
        }

    </View>
)

const styles = StyleSheet.create({
    storyImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#ff8501',
    },

    footerIcon: {
        width: 30,
        height: 30,
        marginRight: 20,

    },

    lastIcon: {
        marginRight: 0,
    }
})

export default Post