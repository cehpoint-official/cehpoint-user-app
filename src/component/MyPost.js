import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Menu, ScrollView } from "native-base";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MyPost = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            textTransform: "capitalize",
            textDecorationLine: "underline",
          }}
        >
          My post
        </Text>
        <View style={{ width: "10%" }}>
          <Menu
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "black",
                    }}
                    icon={faSliders}
                    size={20}
                  />
                </Pressable>
              );
            }}
            style={{ paddingHorizontal: 20, paddingVertical: 30 }}
          >
            <TouchableOpacity style={{ paddingVertical: 10 }}>
              <View>
                <Text style={styles.menu_text}>Today</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingVertical: 10 }}>
              <View>
                <Text style={styles.menu_text}>This week</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingVertical: 10 }}>
              <View>
                <Text style={styles.menu_text}>This month</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingVertical: 10 }}>
              <View>
                <Text style={styles.menu_text}>This year</Text>
              </View>
            </TouchableOpacity>
          </Menu>
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        <View style={[styles.card, styles.row]}>
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
        <View style={[styles.card, styles.row]}>
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
        <View style={[styles.card, styles.row]}>
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
    marginHorizontal: 10,
  },
  row: { flexDirection: "row", flexWrap: "wrap" },
  card: {
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
  menu_text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default MyPost;
