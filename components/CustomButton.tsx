import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({  title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,}: any) => {
  return (
    <TouchableOpacity style={{ backgroundColor: '#FFA001', borderRadius: 10, minHeight: 62, alignItems: 'center', justifyContent: 'center', ...containerStyles , opacity: isLoading ? 0.5 : 1}}
    disabled={isLoading}
    onPress={handlePress}
    activeOpacity={0.7}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' , fontSize: 18, ...textStyles}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton