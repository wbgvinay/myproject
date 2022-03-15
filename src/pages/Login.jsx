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
import UserInputs from "./loginComponents/UserInputs";
import CustomLoginButton from "./loginComponents/CustomLoginButton";

const Login = ({ navigation }) => {
  let initialName = "";
  const [userName, UpdateUserName] = useState(initialName);
  const [password, UpdatePassword] = useState("");

  const submitHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.imgcont}>
        <Image
          source={require("../../Assets/1037762.png")}
          style={{
            width: 70,
            height: 70,
          }}
        />
      </View>
      <UserInputs
        Placeholder="UserName"
        value={userName}
        UpdateValue={(val) => UpdateUserName(val)}
      />
      <UserInputs
        Placeholder="Password"
        value={password}
        securityTextEntry={true}
        UpdateValue={(val) => UpdatePassword(val)}
      />
      <CustomLoginButton onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 70,
  },
  imgcont: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Login;
