import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import icons from '../../constants/icons';

const TabIcon =({icon,color,name,focused}:any) => {
  return(
    <View style={{alignItems:'center',justifyContent:'center', gap:2}}>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={{width:25,height:25}}
      />
      {/* mostra i nomi delle icone */}
      <Text style={{ fontWeight: focused ? 'bold' : 'normal', fontSize: 12, color: color }} > {name}</Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
   <>
   <Tabs
   screenOptions={{
    //mostra i nomi delle icone
    tabBarShowLabel: false,
    //setto i colori della tabbar
    tabBarActiveTintColor: '#FFA001',
    tabBarInactiveTintColor: '#CDCDE0',
    tabBarStyle: {
      backgroundColor: '#161622',
      borderTopWidth: 1,
      borderTopColor: '#232533',
      height: 84,
    }
   }}
   >
    <Tabs.Screen name="home"  options={{ title: 'Home', headerShown: false,
     tabBarIcon:({color,focused}) =>(
      <TabIcon
        icon={icons.home}
        color={color}
        name="Home"
        focused={focused}
      />
    ) 
    }} />

<Tabs.Screen name="bookmark"  options={{ title: 'Bookmark', headerShown: false,
     tabBarIcon:({color,focused}) =>(
      <TabIcon
        icon={icons.bookmark}
        color={color}
        name="Bookmark"
        focused={focused}
      />
    ) 
    }} /> 
    <Tabs.Screen name="create"  options={{ title: 'Create', headerShown: false,
      tabBarIcon:({color,focused}) =>(
       <TabIcon
         icon={icons.plus}
         color={color}
         name="Create"
         focused={focused}
       />
     ) 
     }} />

<Tabs.Screen name="profile"  options={{ title: 'Profile', headerShown: false,
      tabBarIcon:({color,focused}) =>(
       <TabIcon
         icon={icons.profile}
         color={color}
         name="Profile"
         focused={focused}
       />
     ) 
     }} />
   </Tabs>
   </>
  )
}

export default TabsLayout
