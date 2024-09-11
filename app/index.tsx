import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import FoodListItem from "@/components/food-list-item";

const foodItems = [
  { itemName: "banana", calories: 100, brand: "Nestle" },
  { itemName: "soya", calories: 100, brand: "blueband" },
  { itemName: "mango", calories: 100, brand: "Nestle" },
  { itemName: "apple", calories: 100, brand: "blueband" },
  { itemName: "orange", calories: 100, brand: "Nestle" },
];

const App = () => {
  return (
    <View style={styles.container}>
      {/* Food Item  View */}

      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem {...item} />}
        contentContainerStyle={{ gap: 5 }}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
});
