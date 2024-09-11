import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const FoodListItem = ({
  itemName,
  calories,
  brand,
}: {
  itemName: string;
  calories: number;
  brand: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{itemName}</Text>
        <Text style={{ fontSize: 16, color: "dimgray" }}>
          {calories} cal, {brand}
        </Text>
      </View>

      <View>
        <AntDesign name="pluscircleo" size={24} color="royalblue" />
      </View>
    </View>
  );
};

export default FoodListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 8,
    gap: 10,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
