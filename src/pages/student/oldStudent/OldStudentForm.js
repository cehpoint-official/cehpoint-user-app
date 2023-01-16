import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Box, FormControl, Image, Input } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function OldStudentForm({ navigation }) {
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
        <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Image
            style={{
              height: 120,
              width: 120,
              marginTop: 90,
              marginBottom: 110,
            }}
            source={require("../../../../assets/images/small-logo.png")}
            alt="home-image"
          />
        </View>
        <Box alignItems="center">
          <FormControl style={{ marginBottom: 20 }}>
            <Input type="text" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <Input type="password" placeholder="Enter your Password" />
          </FormControl>
        </Box>
        <View
          style={{ display: "flex", alignItems: "flex-end", width: "100%" }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "#D4C00B",
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("course")}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
              }}
              icon={faArrowRightLong}
              size={30}
            />
          </TouchableOpacity>
        </View>
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

export default OldStudentForm;
