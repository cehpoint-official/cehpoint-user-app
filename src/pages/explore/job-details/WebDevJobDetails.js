import { faArrowLeftLong, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, ScrollView } from "native-base";
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

function WebDevJobDetails({ navigation }) {
  const insets = useSafeAreaInsets();
  const data = [
    {
      id: 1,
      key: "Conducting analysis of website and application requirements.",
    },
    {
      id: 2,
      key: "Writing back-end code and building efficient PHP modules.",
    },
    {
      id: 3,
      key: "Developing back-end portals with an optimized database. ",
    },
    { id: 4, key: "Troubleshooting application and code issues. " },
    { id: 5, key: "Integrating data storage solutions." },
    {
      id: 6,
      key: "Responding to integration requests from front-end developers.",
    },
    {
      id: 7,
      key: "Finalizing back-end features and testing web applications.",
    },
    {
      id: 8,
      key: "Updating and altering application features to enhance performance.",
    },
  ];
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
      <View style={{ paddingHorizontal: 10, paddingBottom: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("jobs-and-intern")}
          style={{
            paddingHorizontal: 5,
          }}
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
          <View style={{ width: "25%" }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../../../../assets/images/small-logo.png")}
              alt="home-image"
            />
          </View>
          <View style={{ width: "75%", marginTop: 20 }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                textTransform: "capitalize",
              }}
            >
              Web development
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          Roles and Responsibilities-
        </Text>
        <View
          style={{
            paddingBottom: 30,
            borderBottomWidth: 1,
            borderStyle: "dotted",
            marginBottom: 30,
          }}
        >
          {data?.map((item) => (
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}
              key={item.id}
            >
              <View style={{ width: "5%", paddingTop: 8 }}>
                <FontAwesomeIcon
                  style={{
                    color: "black",
                  }}
                  icon={faCircle}
                  size={5}
                />
              </View>
              <View style={{ width: "95%" }}>
                <Text style={{ paddingBottom: 3 }}>{item.key}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={styles.image}
              source={require("../../../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.heading}>cehpoint</Text>
            <Text style={styles.des}>Remote - Full time - Minimum 5 LPA</Text>
            <Button
              style={styles.btn}
              w="50%"
              size="xs"
              onPress={() => navigation.navigate("job-form")}
            >
              <Text style={styles.btn_text}>apply now</Text>
            </Button>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={styles.image}
              source={require("../../../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.heading}>cehpoint</Text>
            <Text style={styles.des}>Remote - Full time - Minimum 5 LPA</Text>
            <Button
              style={styles.btn}
              w="50%"
              size="xs"
              onPress={() => navigation.navigate("job-form")}
            >
              <Text style={styles.btn_text}>apply now</Text>
            </Button>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={styles.image}
              source={require("../../../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.heading}>cehpoint</Text>
            <Text style={styles.des}>Remote - Full time - Minimum 5 LPA</Text>
            <Button
              style={styles.btn}
              w="50%"
              size="xs"
              onPress={() => navigation.navigate("job-form")}
            >
              <Text style={styles.btn_text}>apply now</Text>
            </Button>
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 10,
  },
  image: { borderRadius: 10, width: "100%", height: 70 },
  details: { width: "70%", paddingLeft: 20 },
  heading: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  des: {
    fontSize: 10,
    fontWeight: "600",
  },
  btn: {
    marginTop: 5,
    backgroundColor: "#D4C00B",
    borderRadius: 10,
    marginBottom: 10,
  },
  btn_text: {
    fontWeight: "600",
    fontSize: 13,
    color: "black",
    textTransform: "capitalize",
  },
});

export default WebDevJobDetails;
