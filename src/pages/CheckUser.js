import {
  faCompass,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CheckUser({ navigation }) {
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
      <View
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{ height: 120, width: 120, marginTop: 60 }}
          source={require("../../assets/images/small-logo.png")}
          alt="home-image"
        />

        <Button
          style={{
            marginTop: 60,
            backgroundColor: "#D4C00B",
            borderRadius: 10,
          }}
          w="100%"
          size="sm"
          onPress={() => navigation.navigate("check-student")}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                paddingEnd: 10,
                paddingRight: 20,
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "black",
                }}
                icon={faUserGraduate}
                size={28}
              />
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 22 }}>
              I am a Student
            </Text>
          </View>
        </Button>

        <Text style={{ paddingVertical: 40, fontWeight: "400", fontSize: 22 }}>
          OR
        </Text>
        <Button
          style={{
            backgroundColor: "#D4C00B",
            borderRadius: 10,
          }}
          w="100%"
          size="sm"
          onPress={() => navigation.navigate("check-client")}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                paddingEnd: 10,
                paddingRight: 20,
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "black",
                }}
                icon={faUserTie}
                size={28}
              />
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 22 }}>
              I am a Client
            </Text>
          </View>
        </Button>
        <Button
          style={{
            backgroundColor: "black",
            marginTop: 80,
            position: "relative",
            borderRadius: 10,
          }}
          w="100%"
          size="sm"
          onPress={() => navigation.navigate("explore")}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                paddingEnd: 10,
                paddingRight: 20,
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#D4C00B",
                }}
                icon={faCompass}
                size={28}
              />
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 20,
                color: "white",
                textTransform: "uppercase",
                paddingRight: 45,
              }}
            >
              explore cehpoint
            </Text>
          </View>
        </Button>
        <Image
          style={{
            position: "absolute",
            bottom: -65,
            right: 5,
            width: 100,
            height: 150,
          }}
          resizeMode={"stretch"}
          source={require("../../assets/images/Group.png")}
          alt="home-image"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CheckUser;
