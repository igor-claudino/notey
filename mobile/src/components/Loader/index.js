import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";

export default function Loader() {
  // Render any loading content that you like here
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#9B56BB" />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
