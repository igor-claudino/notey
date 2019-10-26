import React from "react";
import { View, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MyProfileHeader({ navigation }) {
  async function handleLogout() {
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("Auth");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.btnIcon}>
        <Icon name="exit-to-app" size={32} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  },

  btnIcon: {
    margin: 11
  }
});
