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

const UserInputs = ({ Placeholder, securityTextEntry, value, UpdateValue }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={Placeholder}
        value={value}
        onChangeText={UpdateValue}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={securityTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  inputText: {
    backgroundColor: "#f8f8f8",
    width: 340,
    height: 45,
    borderRadius: 40,
    marginLeft: 15,
    fontSize: 11,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default UserInputs;
