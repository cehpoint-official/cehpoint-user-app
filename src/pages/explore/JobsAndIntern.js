import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Menu, ScrollView, ThreeDotsIcon } from "native-base";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AllInterns from "../../component/AllInterns";
import AllJobs from "../../component/AllJobs";

const Tab = createMaterialTopTabNavigator();

function JobsAndIntern({ navigation }) {
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
      <TouchableOpacity activeOpacity={1}>
        <StatusBar
          hidden={false}
          backgroundColor={"transparent"}
          barStyle={"dark-content"}
          translucent
        />
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <TouchableOpacity
            // onPress={() => navigation.navigate("explore")}
            >
              <FontAwesomeIcon
                style={{
                  color: "black",
                }}
                icon={faArrowLeftLong}
                size={30}
              />
            </TouchableOpacity>
            <View style={{ width: "7%", marginTop: 5 }}>
              <Menu
                trigger={(triggerProps) => {
                  return (
                    <Pressable
                      accessibilityLabel="More  menu"
                      {...triggerProps}
                    >
                      <ThreeDotsIcon
                        size={5}
                        style={{
                          transform: [{ rotate: "90deg" }],
                          color: "black",
                        }}
                      />
                    </Pressable>
                  );
                }}
                style={{ paddingHorizontal: 20, paddingVertical: 30 }}
              >
                <TouchableOpacity
                  style={styles.menu}
                  onPress={() => navigation.navigate("my-application")}
                >
                  <View>
                    <Text style={styles.menu_text}>My application</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menu}
                  onPress={() => navigation.navigate("my-application")}
                >
                  <View>
                    <Text style={styles.menu_text}>Log out</Text>
                  </View>
                </TouchableOpacity>
              </Menu>
            </View>
          </View>
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
              <Text style={{ fontWeight: "400", fontSize: 22 }}>
                Jobs & Internship
              </Text>
            </View>
          </View>
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: "black" },
            lazy: true,
          }}
          style={{ minHeight: 700, paddingTop: 10 }}
        >
          <Tab.Screen name="All Jobs" component={AllJobs} />
          <Tab.Screen name="All Internship" component={AllInterns} />
        </Tab.Navigator>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  menu: { flexDirection: "row", flexWrap: "wrap", paddingVertical: 10 },
  menu_text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default JobsAndIntern;
