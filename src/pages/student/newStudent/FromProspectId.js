import {
  faArrowRightLong,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Box, FormControl, Image, Input, ScrollView } from "native-base";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FromProspectId({ navigation }) {
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
        <Text
          style={{
            textTransform: "capitalize",
            paddingTop: 20,
            fontWeight: "400",
            fontSize: 25,
            textAlign: "center",
            paddingBottom: 20,
          }}
        >
          welcome student
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            style={{
              color: "green",
            }}
            icon={faCircleCheck}
            size={20}
          />
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              textAlign: "center",
              paddingLeft: 20,
              marginTop: -5,
            }}
          >
            you are approved!
          </Text>
        </View>

        <Box alignItems="center" style={{ paddingTop: 80 }}>
          <FormControl>
            <Input
              variant="underlined"
              placeholder="Enter your Prospect ID"
              style={{ borderBottomWidth: 1 }}
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
            onPress={() => navigation.navigate("welcome-cehpoint")}
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

export default FromProspectId;
