import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Box, FormControl, Image, Input, ScrollView } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FromOldCLient({ navigation }) {
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
          style={{ height: 70, width: 70, marginTop: 30 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="logo"
        />

        <Box alignItems="center" style={{ paddingTop: 150 }}>
          <FormControl>
            <Input
              variant="underlined"
              placeholder="Enter Client ID"
              style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
            />
          </FormControl>
        </Box>
        <View
          style={{ display: "flex", alignItems: "flex-end", width: "100%" }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "black",
              borderRadius: 10,
              marginTop: 30,
            }}
            onPress={() => navigation.navigate("client-report")}
          >
            <FontAwesomeIcon
              style={{
                color: "white",
              }}
              icon={faArrowRightLong}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default FromOldCLient;
