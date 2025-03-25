import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
    return (
        <View className='flex-1 items-center justify-center bg-primary'>
            <Text className='font-pthin text-4xl text-white'>App!!!</Text>
            <StatusBar style='auto' />
            <Link href={'/home'} className='font-black'>Go to Home</Link>
        </View>
    )
}

export default App