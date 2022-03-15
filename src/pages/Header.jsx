import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
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
import { useState } from "react";
import User from "./User";

const Header = () => {
  const [greetUser, setGreetUser] = useState(false);
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      {!greetUser ? <User /> : null}
    </View>
  );
};

export default Header;
