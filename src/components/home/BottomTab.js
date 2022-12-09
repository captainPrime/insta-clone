import { View, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

const BottomTab = ({ icons }) => {

    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <Pressable onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? styles.profilePic() : null,
                    activeTab === 'Profile' && icon.name === activeTab ?
                        styles.profilePic(activeTab)
                        : null
                ]} />
        </Pressable>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {
                    icons.map((icon, index) => (
                        <Icon key={index} icon={icon} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        position: 'absolute',
        width: '100%', bottom: '3%',
        zIndex: 999,
        backgroundColor: 'black'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePic: (activeTab = '') => ({
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderRadius: 50,
        borderColor: '#fff'
    })
})

export default BottomTab