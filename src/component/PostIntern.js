import { ScrollView } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PostIntern = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          width: "94%",
          height: 95,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff7c1",
          borderRadius: 15,
          marginVertical: 20,
          marginHorizontal: 10,
        }}
        onPress={() => navigation.navigate("job-intern-form")}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Image
            source={require("../../assets/images/post-job-intern.png")}
            alt="post-job-intern"
          />
          <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "600" }}>
            Post a job
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: "#999",
          borderBottomWidth: 2,
          width: "100%",
        }}
      ></View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            textTransform: "capitalize",
            paddingTop: 10,
          }}
        >
          recent post
        </Text>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ borderRadius: 10, width: "100%", height: 70 }}
              source={require("../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={{ width: "70%", paddingLeft: 20 }}>
            <Text style={styles.company_name}>cehpoint</Text>
            <Text style={styles.details}>Company Details</Text>
            <Text style={styles.details}>
              Remote - Full time - Minimum 5 LPA
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ borderRadius: 10, width: "100%", height: 70 }}
              source={require("../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={{ width: "70%", paddingLeft: 20 }}>
            <Text style={styles.company_name}>cehpoint</Text>
            <Text style={styles.details}>Company Details</Text>
            <Text style={styles.details}>
              Remote - Full time - Minimum 5 LPA
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ borderRadius: 10, width: "100%", height: 70 }}
              source={require("../../assets/images/jobapply.png")}
              alt="image"
            />
          </View>
          <View style={{ width: "70%", paddingLeft: 20 }}>
            <Text style={styles.company_name}>cehpoint</Text>
            <Text style={styles.details}>Company Details</Text>
            <Text style={styles.details}>
              Remote - Full time - Minimum 5 LPA
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 15,
  },
  company_name: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  details: {
    fontSize: 10,
    fontWeight: "600",
  },
});

export default PostIntern;
