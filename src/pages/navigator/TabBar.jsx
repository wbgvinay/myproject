import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TextInput,
  Button,
  Alert,
  Easing,
  StatusBar,
  StatusBarProps,
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
import Cart from "../Cart";
import Favourites from "../Favourites";
import Notification from "../Notification";

import { Feather } from "react-native-feather";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#fff",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../../Assets/icons/home.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../../Assets/icons/heart.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../../Assets/icons/bell.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../../Assets/icons/bookmark.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabBar;
