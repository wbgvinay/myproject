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

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

//import OnboardingScreen from "./OnboardingScreen";
//import HomeScreen from "./screens/HomeScreen";
//import Bookmark from "./screens/Bookmark";
//import Profile from "./screens/Profile";
//import Favourites from "./screens/Favourites";
//import BottomNavigator from "./BottomNavigator";
//import { SafeAreaView } from "react-native-safe-area-context";
//import HomescreenDetails from "./screens/HomescreenDetails";
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

import Login from "./pages/Login.jsx";
import TabBar from "./pages/navigator/TabBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
