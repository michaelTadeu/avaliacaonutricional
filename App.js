// import React from "react";

// import MainStackNavigator from "./src/navigation/MainStackNavigator";

// export default function App() {
//   return <MainStackNavigator />;
// }

import React, { Component } from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

// Import all the screens
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Settings from "./src/screens/Settings";
import SideMenu from "./src/SideMenu";
import Colors from "./src/constants/Colors";

// Navigation Drawer Structure for all screens
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require("./assets/images/drawer.png")}
            style={{ width: 30, height: 30, marginRight: 8 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// Stack Navigator for the HomeScreen of Navigation Drawer
const Home_StackNavigator = createStackNavigator({
  // All the screens from 'Home' will be indexed here
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerRight: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: Colors.tintColor
      },
      headerTintColor: "#fff"
    })
  }
});

// Stack Navigator for the DetailScreen of Navigation Drawer
const Detail_StackNavigator = createStackNavigator({
  // All the screens from 'Detail' will be indexed here
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: "Details",
      headerRight: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: Colors.tintColor
      },
      headerTintColor: "#fff"
    })
  }
});

// Stack Navigator for the SettingsScreen of Navigation Drawer
const Settings_StackNavigator = createStackNavigator({
  // All the screens from Settings will be indexed here
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: "Settings",
      headerRight: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: Colors.tintColor
      },
      headerTintColor: "#fff"
    })
  }
});

// Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    // Drawer Optons and indexing
    NavScreen1: { screen: Home_StackNavigator },
    NavScreen2: { screen: Detail_StackNavigator },
    NavScreen3: { screen: Settings_StackNavigator }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 100
  }
);
export default createAppContainer(Drawer);
