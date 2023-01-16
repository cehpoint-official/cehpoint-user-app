import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function NewCLientId({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
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
          style={{ height: 70, width: 70, marginTop: 30 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="home-image"
        />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            paddingTop: 20,
            paddingLeft: 10,
          }}
        >
          Dear Client,
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            paddingLeft: 10,
          }}
        >
          Save this Client ID for future Service
        </Text>
        <Text
          style={{
            paddingBottom: 10,
            fontWeight: "400",
            fontSize: 16,
            paddingTop: 90,
            paddingBottom: 30,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Your client id is
        </Text>
        <Button
          style={{
            marginTop: 10,
            backgroundColor: "#D4C00B",
            paddingVertical: 12,
            borderRadius: 15,
          }}
          rightIcon={
            <FontAwesomeIcon
              style={{
                color: "black",
                fontSize: 25,
                paddingStart: 30,
              }}
              icon={faCopy}
            />
          }
          onPress={() => navigation.navigate("form-client-id")}
        >
          <View style={{ display: "flex", justifyContent: "space-around" }}>
            <Text style={{ fontWeight: "400", fontSize: 22 }}>CEH12345</Text>
          </View>
        </Button>
        <Text
          style={{
            paddingBottom: 10,
            fontWeight: "400",
            fontSize: 16,
            paddingTop: 40,
            paddingBottom: 5,
            textAlign: "center",
          }}
        >
          Your request has been sent
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          wait for approve
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default NewCLientId;
