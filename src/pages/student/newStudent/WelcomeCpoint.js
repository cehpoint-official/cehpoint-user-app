import { faCircleQuestion, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function WelcomeCpoint({ navigation }) {
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
      <View style={{ paddingHorizontal: 20, height: "100%" }}>
        <Image
          style={{ height: 70, width: 70, marginTop: 30 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="home-image"
        />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 20,
            paddingTop: 20,
            textTransform: "uppercase",
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          welcome to chepoint
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            color: "#D4C00B",
            paddingLeft: 10,
          }}
        >
          Build a great career with your deep learning and preactice with
          CEHPOINT
        </Text>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{
              marginTop: 70,
              backgroundColor: "#D4C00B",
              marginBottom: 20,
              borderRadius: 10,
            }}
            w="75%"
            onPress={() => navigation.navigate("course")}
          >
            <Text style={{ fontWeight: "400", fontSize: 16 }}>
              Embeded Course brochure
            </Text>
          </Button>
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "black",
              borderRadius: 10,
            }}
            w="75%"
            // onPress={() => navigation.navigate("")}
          >
            <Text style={{ fontWeight: "400", fontSize: 20, color: "white" }}>
              Payment link
            </Text>
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingBottom: 20,
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
            onPress={() => navigation.navigate("gift")}
          >
            <FontAwesomeIcon
              style={{
                color: "#D4C00B",
              }}
              icon={faGift}
              size={35}
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 22,
                paddingLeft: 10,
                paddingTop: 6,
              }}
            >
              Free gift
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingTop: 10,
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                paddingTop: 10,
              }}
              icon={faCircleQuestion}
              size={25}
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 20,
                paddingLeft: 8,
                textTransform: "uppercase",
              }}
            >
              Help
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: "relative",
  },
});

export default WelcomeCpoint;
