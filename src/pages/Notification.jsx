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

const Notification = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "teal",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "#000" }}>
        Notification screen
      </Text>
    </View>
  );
};

export default Notification;
