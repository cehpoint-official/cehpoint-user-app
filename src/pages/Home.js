import { Image, Spinner, View } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Home({ navigation }) {
  setTimeout(() => {
    navigation.navigate("check-user");
  }, 1000);
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      onPress={() => navigation.navigate("check-user")}
    >
      <StatusBar
        hidden={false}
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent
      />
      <View>
        <Image
          source={require("../../assets/images/large-logo.png")}
          alt="logo"
          style={{ height: 150, width: 150 }}
        />
        <Spinner size="lg" style={{ color: "black", paddingTop: 30 }} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    // textDecoration: "none",
    color: "transparent",
  },
});

export default Home;
