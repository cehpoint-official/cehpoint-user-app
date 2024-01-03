import {
  faCompass,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <StatusBar hidden={false} backgroundColor={"transparent"} barStyle={"dark-content"} translucent />

      <View style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{ height: 120, width: 120, marginTop: 60 }}
          source={require("../../assets/splash.png")}
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


        <Pressable style={[styles.btn,{backgroundColor:"black"}]} onPress={() => navigation.navigate("explore")}>
          <FontAwesomeIcon style={{ color: "#D4C00B" }} icon={faCompass} />
          <Text style={[styles.btnText,{ color: "white" }]}> Explore CEHPONT </Text>
        </Pressable>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: "100%",
    borderRadius: 8,
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 15,
  }
});

export default CheckUser;
