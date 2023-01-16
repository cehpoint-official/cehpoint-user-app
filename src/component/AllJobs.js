import { Button, ScrollView } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AllJobs = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>web development</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("web-dev-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>app development</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("app-dev-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>Marketing specialist</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("market-specialist-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>cyber security specialist</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("cyber-specialist-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>devsecops</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("devsecops-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ width: "25%" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/jobapply.png")}
            alt="image"
          />
        </View>
        <View style={styles.details_part}>
          <Text style={styles.heading}>cyber security mentor</Text>
          <Text style={styles.des}>2 Company hiring</Text>
          <Button
            style={styles.btn}
            w="50%"
            size="xs"
            onPress={() => navigation.navigate("cyber-security-details")}
          >
            <Text style={styles.btn_text}>see jobs</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 10,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: 70,
  },
  details_part: {
    width: "75%",
    paddingLeft: 20,
  },
  heading: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  des: { fontSize: 10, fontWeight: "600" },
  btn: {
    marginTop: 5,
    backgroundColor: "#D4C00B",
    borderRadius: 10,
    marginBottom: 10,
  },
  btn_text: {
    fontWeight: "600",
    fontSize: 11,
    color: "black",
    textTransform: "uppercase",
  },
});

export default AllJobs;
