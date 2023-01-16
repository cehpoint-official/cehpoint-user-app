import { Image, ScrollView } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Gift() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar
        hidden={false}
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Image
          style={{ height: 70, width: 70, marginTop: 50 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="logo"
        />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: 70,
          }}
        >
          <Image
            style={{ height: 200, width: 200 }}
            source={require("../../../../assets/images/gift.gif")}
            alt="gift"
          />

          <Text style={{ paddingTop: 10, fontSize: 15 }}>
            Open this gift box
          </Text>
          <Text style={{ paddingTop: 20, fontSize: 22 }}>
            A surprise free gift for you
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});

export default Gift;
