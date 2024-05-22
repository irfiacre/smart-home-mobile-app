import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LightScreen = () => {
  return (
    <View style={styles.lightContainer}>
      <Text>LightScreen</Text>
    </View>
  );
};

export default LightScreen;

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
