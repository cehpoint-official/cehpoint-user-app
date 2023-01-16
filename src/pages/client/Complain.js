import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Box,
  Button,
  FormControl,
  Image,
  ScrollView,
  TextArea,
} from "native-base";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

function Complain({ navigation }) {
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
      <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 5,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon
            style={{
              color: "black",
            }}
            icon={faArrowLeftLong}
            size={30}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View style={{ width: "30%" }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../../../assets/images/small-logo.png")}
              alt="home-image"
            />
          </View>
          <View style={{ width: "70%", marginTop: 20 }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                textTransform: "capitalize",
              }}
            >
              complaint
            </Text>
          </View>
        </View>
        <Box style={{ paddingTop: 80 }}>
          <FormControl>
            <FormControl style={styles.Form_Control}>
              Description box
            </FormControl>

            <TextArea h={20} placeholder="write here" />
          </FormControl>
        </Box>
        <View style={{ display: "flex", alignItems: "flex-end" }}>
          <Button
            style={{
              marginVertical: 20,
              backgroundColor: "#D4C00B",
              paddingVertical: 12,
              borderRadius: 50,
              width: "40%",
            }}
            size="sm"
            // onPress={() => navigation.navigate("")}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                textTransform: "uppercase",
              }}
            >
              submit
            </Text>
          </Button>
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
  Form_Control: {
    paddingBottom: 5,
  },
});

export default Complain;
