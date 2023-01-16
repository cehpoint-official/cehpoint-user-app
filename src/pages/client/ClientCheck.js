import { faHandshake, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ClienttCheck({ navigation }) {
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
          onPress={() => navigation.navigate("client-form")}
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
                paddingRight: 10,
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "black",
                }}
                icon={faHandshake}
                size={28}
              />
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 22 }}>
              Start a Project with us
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
          onPress={() => navigation.navigate("form-old-client")}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
              }}
              icon={faUserTie}
              size={28}
            />
            <Text style={{ fontWeight: "400", fontSize: 22, paddingLeft: 18 }}>
              Login as a client
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
          onPress={() => navigation.navigate("form-client-id")}
        >
          <Text
            style={{
              fontWeight: "400",
              color: "black",
              fontSize: 18,
            }}
          >
            already submit form ?
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

export default ClienttCheck;
