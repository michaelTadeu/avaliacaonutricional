import React, { Fragment, Component } from 'react'
import { StyleSheet, Text, View, Platform, Animated, Image } from 'react-native'
import styled from 'styled-components'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ImageEditor from '@react-native-community/image-editor'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

// Navigation nesting order Top to Bottom:

// Drawer Navigator => Opens TabNavigator (Home) and System Settings

// Tab Navigator => Opens Homescreen (Home) and Dashboard

// Stack Navigator => Opens Home and App Settings

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 20px;
`
const WelcomeBtn = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
})

function SystemSettings({ navigation }) {
  return (
    <CenterView>
      <WelcomeText>System Settings</WelcomeText>
      <WelcomeBtn onPress={() => navigation.openDrawer()}>
        <WelcomeText> Open Drawer Navigator </WelcomeText>
      </WelcomeBtn>
    </CenterView>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = null
          if (route.name === 'Home') {
            iconName = 'ios-home'
          } else if (route.name === 'Dashboard') {
            iconName = 'ios-speedometer'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
      }}
    >
      <Tab.Screen name='Home' component={StackNavigator} />
      <Tab.Screen name='Dashboard' component={Dashboard} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        if (route.name === 'AppSettings') {
          return {
            title: 'App Settings',
            headerTitleStyle: {
              color: 'black',
            },
            headerTintColor: 'red',
            headerStyle: {
              backgroundColor: 'yellow',
            },
          }
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='AppSettings' component={AppSettings} />
    </Stack.Navigator>
  )
}

class Home extends Component {
  state = {
    image: null,
  }
  componentDidMount() {
    if (Constants.platform.ios) {
      ImagePicker.requestCameraRollPermissionsAsync().then(({ status }) => {
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      })
    }
  }
  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [2, 1],
    }).then((result) => {
      if (result.cancelled) {
        return
      }

      return this.setState(() => ({ image: result.uri }))
    })
  }
  render() {
    const { navigation } = this.props
    const { image } = this.state
    return (
      <CenterView>
        <WelcomeText>Hello, World!</WelcomeText>
        <WelcomeBtn onPress={() => navigation.navigate('AppSettings')}>
          <WelcomeText>App Settings</WelcomeText>
        </WelcomeBtn>
        <WelcomeBtn onPress={() => navigation.openDrawer()}>
          <WelcomeText>Drawer Navigator </WelcomeText>
        </WelcomeBtn>
        <WelcomeBtn onPress={this.pickImage}>
          <WelcomeText>Open Gallery</WelcomeText>
        </WelcomeBtn>
        {image && <Image style={styles.img} source={{ uri: image }} />}
      </CenterView>
    )
  }
}

class Dashboard extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
  }
  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.spring(width, { toValue: 300, speed: 5 }).start()
    Animated.spring(height, { toValue: 300, speed: 5 }).start()
  }
  render() {
    const { opacity, width, height } = this.state
    return (
      <CenterView>
        <View>
          <Animated.Image
            style={[styles.img, { opacity, width, height }]}
            source={{
              uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png',
            }}
          />
        </View>
      </CenterView>
    )
  }
}

function AppSettings() {
  return (
    <CenterView>
      <WelcomeText>Settings</WelcomeText>
    </CenterView>
  )
}

const Drawer = createDrawerNavigator()

const Stack = createStackNavigator()

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => {
          if (route.name === 'Home') {
            return {
              drawerIcon: () => (
                <Ionicons name='ios-home' size={20} color='red' />
              ),
            }
          } else if (route.name === 'System Settings') {
            return {
              drawerIcon: () => (
                <Ionicons name='ios-settings' size={20} color='red' />
              ),
            }
          }
        }}
      >
        <Drawer.Screen name='Home' component={TabNavigator} />
        <Drawer.Screen name='System Settings' component={SystemSettings} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
