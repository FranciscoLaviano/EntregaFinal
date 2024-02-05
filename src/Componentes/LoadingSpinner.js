import React from 'react'
import { View, ActivityIndicator } from 'react-native'


const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#F99516' }}>
      <ActivityIndicator size={80} color="#8D1F59" />
    </View>
  )
}

export default LoadingSpinner