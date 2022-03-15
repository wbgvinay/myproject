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
import { useState, useEffect } from "react";

const Home = () => {
  let listOfProducts = [
    {
      id: 0,
      title: "Fries",
      SubTitle: "Branded french overcooked fries",
      description:
        "French fries or simply fries or chips, are pieces of potato that have been deep-fried.These are deep-fried, very thin, salted slices of potato that are usually served at room temperature. French fries have numerous variants, from thick-cut to shoestring, crinkle, curly and many other names",
      price: 89.0,
      image: require("../../Assets/fries.png"),
    },
    {
      id: 1,
      title: "Hamburger",
      SubTitle: "Branded italian freshly made hamburger",
      description:
        "A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes",
      price: 89.0,
      image: require("../../Assets/hamburger.png"),
    },
    {
      id: 2,
      title: "Rice-Bowl",
      SubTitle: "Branded japanese rice-bowl",
      description:
        "First and foremost, a rice bowl is all about the rice. Much as with a Japanese breakfast, the rice makes up the bulk of the meal, and everything in the bowl that isn't rice is meant to be eaten with it.",
      price: 89.0,
      image: require("../../Assets/rice-bowl.png"),
    },
    {
      id: 3,
      title: "Salaad",
      SubTitle: "Branded polish veg salaad",
      description:
        ": a mixture of raw green vegetables (such as different types of lettuce) usually combined with other raw vegetables. : a mixture of small pieces of raw or cooked food (such as pasta, meat, fruit, eggs, or vegetables) combined usually with a dressing and served cold.",
      price: 89.0,
      image: require("../../Assets/salad.png"),
    },
    {
      id: 4,
      title: "Lobster",
      SubTitle: "Branded Carribean lobsters",
      description:
        "Lobsters are a family (Nephropidae, sometimes also Homeridae) of large marine crustaceans. Lobsters have long bodies with muscular tails, and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others",
      price: 89.0,
      image: require("../../Assets/seafood.png"),
    },
    {
      id: 5,
      title: "Chicken Bucket",
      SubTitle: "Branded chicken bucket",
      description:
        "Like the name suggests, you can choose 10 pieces of chicken (a mix of legs, wings, breast, and thighs) in any of the varieties offered by KFC (Original Recipe and Extra Crispy in bone-in or boneless varieties, and Grilled).Basically: here at KFC we support people who eat food. So if you like food, my Family Fill Up happens to be a great way to feed 4 people with 8 pieces of Original Recipe chicken, 2 large mashed potatoes, 1 large gravy, 1 cole slaw and 4 biscuits for only $20",
      price: 89.0,
      image: require("../../Assets/produc6.png"),
    },
    {
      id: 6,
      title: "Milkshake",
      SubTitle: "Branded hawaian milkshake",
      description:
        "A milkshake (sometimes simply called a shake) is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.",
      SubTitle: "",
      price: 89.0,
      image: require("../../produc8.png"),
    },
  ];
  const [products, UpdateProducts] = useState(listOfProducts);

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.productContainer}>
        <Text
          style={{ marginHorizontal: 20, fontWeight: "bold", fontSize: 20 }}
        >
          Products
        </Text>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              horizontal
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.touchableCont}>
                    <TouchableOpacity style={styles.card}>
                      <View style={styles.titles}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "900",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <View style={styles.imgContainer}>
                        <Image
                          source={{ uri: item.image }}
                          style={{ width: 60, height: 70, resizeMode: "cover" }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  card: {
    marginTop: 20,
    height: 160,
    width: 150,
    padding: 14,
    borderRadius: 5,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginHorizontal: 18,
  },
  imgContainer: {
    marginVertical: 6,
    alignItems: "center",
  },
  touchableCont: {
    flex: 1,
    flexDirection: "row",
  },
  productContainer: { padding: 5, paddingVertical: 48 },
});

export default Home;
