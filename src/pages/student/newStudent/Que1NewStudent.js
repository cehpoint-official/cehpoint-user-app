import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Checkbox, Image } from "native-base";
import React, {useState} from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Que1NewStudent({ navigation }) {
  const insets = useSafeAreaInsets();
  //states
  const [courseInterested, setCourseInterested] = useState(null);

  return (
    <SafeAreaView
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
          alt="home-image"
        />
        <Text
          style={{
            textTransform: "uppercase",
            paddingVertical: 30,
            fontWeight: "400",
            fontSize: 20,
            paddingLeft: 10,
          }}
        >
          hi student
        </Text>
        <Text
          style={{
            paddingBottom: 10,
            fontWeight: "400",
            fontSize: 16,
            paddingTop: 70,
            paddingBottom: 50,
            textAlign: "center",
          }}
        >
          Are you interested in Cyber Future Course?
        </Text>
        <Button.Group
          w="100%"
          style={{
            backgroundColor: "#D4C00B",
            paddingVertical: 5,
            display: "flex",
            justifyContent: "space-around",
            borderRadius: 10,
          }}
        >
          <Button style={{ backgroundColor: "#D4C00B", fontWeight: "400" }}>
            <Checkbox
              style={{ borderColor: "black", backgroundColor: "transparent" }}
              onChange={()=>setCourseInterested(true)}
            >
              Yes
            </Checkbox>
          </Button>
          <Button style={{ backgroundColor: "#D4C00B", fontWeight: "400" }}>
            <Checkbox
              style={{ borderColor: "black", backgroundColor: "transparent" }}
              onChange={()=>setCourseInterested(false)}
            >
              No
            </Checkbox>
          </Button>
        </Button.Group>
        <View
          style={{ display: "flex", alignItems: "flex-end", width: "100%" }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "black",
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("student-que2", {courseInterested: courseInterested})}
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Que1NewStudent;
