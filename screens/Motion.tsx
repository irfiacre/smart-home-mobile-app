import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StepsScreen = () => {
  return (
    <View style={styles.stepsContainer}>
      <Text>StepsScreen</Text>
    </View>
  );
};

export default StepsScreen;

const styles = StyleSheet.create({
  stepsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
