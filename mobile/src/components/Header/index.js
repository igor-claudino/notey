import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import minilogo from "../../../assets/mini-logo.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={minilogo} style={styles.logo} />
      <View style={styles.container2}>
        <Icon
          name="feature-search-outline"
          size={32}
          color="#666"
          style={styles.icon}
        />
        <Icon name="file" size={32} color="#666" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  logo: {
    resizeMode: "contain",
    height: 32,
    width: 106,
    margin: 16
  },
  icon: {
    margin: 11
  }
});
