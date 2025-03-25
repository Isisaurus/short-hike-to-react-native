import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
    return (
        <View>
            <Text className='text-3xl text-black'>App!!!</Text>
            <StatusBar style='auto' />
            <Link href={'/profile'} className='font-black'>Go to Profile</Link>
        </View>
    )
}

export default App