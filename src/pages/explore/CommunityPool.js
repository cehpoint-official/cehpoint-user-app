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
import MyPost from "../../component/MyPost";
import PostIntern from "../../component/PostIntern";
import PostJobs from "../../component/PostJobs";

const Tab = createMaterialTopTabNavigator();

function CommunityPool({ navigation }) {
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
        <TouchableOpacity
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
            paddingTop: 10,
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
              community pool
            </Text>
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "black" },
          lazy: true,
          tabBarLabelStyle: {
            fontWeight: "600",
            textAlign: "left",
          },
        }}
        style={{ minHeight: 800, paddingTop: 30 }}
      >
        <Tab.Screen name="post Jobs" component={PostJobs} />
        <Tab.Screen name="Post Internship" component={PostIntern} />
        <Tab.Screen name="My Post" component={MyPost} />
      </Tab.Navigator>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default CommunityPool;
