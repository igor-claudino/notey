import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";

// import { Container } from './styles';
import MyProfileHeader from "../../components/MyProfileHeader";

export default function MyProfile({ navigation }) {
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <MyProfileHeader navigation={navigation} />
    </SafeAreaView>
  );
}
