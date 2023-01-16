import { ScrollView } from "native-base";
import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

const InternApplication = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", paddingTop: 25 }}>
        <View
          style={{
            width: "50%",
            borderColor: "#999",
            borderRightWidth: 2,
          }}
        >
          <View style={{ backgroundColor: "#F7F4D3" }}>
            <Text style={styles.heading}>application</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text1}>Company 1</Text>
            <Text style={styles.text2}>Web development</Text>
            <Text style={styles.text3}>Apply on 02/01/2023</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text1}>CEHPOINT</Text>
            <Text style={styles.text2}>Web development</Text>
            <Text style={styles.text3}>Apply on 02/01/2023</Text>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <View style={{ backgroundColor: "#f7f4d3" }}>
            <Text style={styles.heading}>status</Text>
          </View>
          <View style={[styles.box, { paddingLeft: 0, alignItems: "center" }]}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#D4C00B" }}>
              Pending
            </Text>
          </View>
          <View style={[styles.box, { alignItems: "center", paddingLeft: 0 }]}>
            <Text style={{ color: "#6ABF4C", fontSize: 15, fontWeight: "600" }}>
              Selected
            </Text>
            <Text style={styles.text3}>Join meeting on 05.01.2023</Text>
            <Text style={styles.text3}>Time - 07:30 PM</Text>
            <Text
              style={[styles.text3, { color: "#2A55C3" }]}
              onPress={() => Linking.openURL("https://www.cehpoint.co.in/")}
            >
              Join Meeting
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "center",
    paddingVertical: 5,
  },
  text1: {
    fontSize: 15,
    fontWeight: "600",
  },
  text2: {
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 7,
  },
  text3: {
    fontSize: 11,
    fontWeight: "600",
  },
  box: {
    paddingLeft: 22,
    borderBottomColor: "#999",
    borderBottomWidth: 2,
    height: 150,
    display: "flex",
    justifyContent: "center",
  },
});

export default InternApplication;
