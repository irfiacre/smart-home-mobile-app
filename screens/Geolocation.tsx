import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GeolocationScreen = () => {
  return (
    <View style={styles.geoContainer}>
      <Text>GeolocationScreen</Text>
    </View>
  );
};

export default GeolocationScreen;

const styles = StyleSheet.create({
  geoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
