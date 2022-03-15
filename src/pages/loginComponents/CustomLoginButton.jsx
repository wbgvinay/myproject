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
import { useState } from "react";

const CustomLoginButton = ({ onPress }) => {
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
        <Text style={styles.btntext}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.cont}>
        <Text style={styles.text}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: "#ff304f",
    width: 340,
    height: 45,
    borderRadius: 40,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    fontWeight: "700",
    color: "#fff",
  },
  cont: {
    alignItems: "center",
    paddingVertical: 4,
  },
  text: {
    fontWeight: "700",
  },
});

export default CustomLoginButton;
