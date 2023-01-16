import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function StudentCheck({ navigation }) {
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
        style={{ display: "flex", alignItems: "center", paddingHorizontal: 20 }}
      >
        <Image
          style={{ height: 120, width: 120, marginTop: 60 }}
          source={require("../../../assets/images/small-logo.png")}
          alt="home-image"
        />
        <Button
          w="100%"
          style={{
            marginTop: 60,
            backgroundColor: "#D4C00B",
            paddingVertical: 12,
            borderRadius: 10,
          }}
          size="sm"
          onPress={() => navigation.navigate("student-que1")}
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
              Start Learning
            </Text>
          </View>
        </Button>
        <Text style={{ paddingVertical: 40, fontWeight: "400", fontSize: 22 }}>
          OR
        </Text>
        <Button
          style={{
            borderRadius: 10,
            backgroundColor: "#D4C00B",
            paddingVertical: 12,
          }}
          w="100%"
          size="sm"
          onPress={() => navigation.navigate("old-student-form")}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/images/oldstudent.png")}
              alt="old"
            />
            <Text style={{ fontWeight: "400", fontSize: 22, paddingLeft: 18 }}>
              Login as a student
            </Text>
          </View>
        </Button>
        <Button
          style={{
            backgroundColor: "#D4C00B",
            marginTop: 80,
            borderRadius: 20,
          }}
          w="100%"
          size="xs"
          onPress={() => navigation.navigate("from-prospect-id")}
        >
          <Text
            style={{
              fontWeight: "400",
              color: "black",
              fontSize: 18,
            }}
          >
            already submitted form ?
          </Text>
        </Button>
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

export default StudentCheck;
