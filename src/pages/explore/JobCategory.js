import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "native-base";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function JobCategory({ navigation }) {
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
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,
            paddingHorizontal: 5,
          }}
          onPress={() => navigation.navigate("explore")}
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
            alignItems: "center",
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
              Job category
            </Text>
          </View>
        </View>
        <Text
          style={[styles.text, { textAlign: "center", paddingVertical: 30 }]}
        >
          We only allow to post this jobs only
        </Text>
        <View style={styles.row}>
          <View style={{ width: "47%", marginRight: 20 }}>
            <View style={styles.dev}>
              <Text style={styles.text}>Web development</Text>
            </View>
            <View style={styles.dev}>
              <Text style={styles.text}>Marketing Specialist</Text>
            </View>
            <View style={styles.dev}>
              <Text style={styles.text}>devSecOps</Text>
            </View>
          </View>
          <View style={{ width: "47%" }}>
            <View style={styles.dev}>
              <Text style={styles.text}>App development</Text>
            </View>
            <View style={styles.dev}>
              <Text style={styles.text}>Cyber security Specialist</Text>
            </View>
            <View style={styles.dev}>
              <Text style={styles.text}>Cyber security mentor</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
  },
  row: { flexDirection: "row", flexWrap: "wrap" },
  dev: {
    height: 100,
    backgroundColor: "#FBF5BF",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
  },
});

export default JobCategory;
