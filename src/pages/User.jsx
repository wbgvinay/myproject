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

const User = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginLeft: 14, fontWeight: "700", fontSize: 14 }}>
        Hi John Doe!
      </Text>
    </View>
  );
};

export default User;
