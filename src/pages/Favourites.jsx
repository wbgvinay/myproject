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

const Favourites = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
        Favourites screen
      </Text>
    </View>
  );
};

export default Favourites;
