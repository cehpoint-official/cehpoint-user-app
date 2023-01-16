import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as DocumentPicker from "expo-document-picker";
import { Box, Button, FormControl, Image, Input } from "native-base";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CompanyDetailsForm({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {
        let { name, size, uri } = response;
        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        // console.log(fileToUpload, "...............file");
        setDoc(fileToUpload);
      }
    });
    // console.log(result);
    // console.log("Doc: " + doc.uri);
  };
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
      <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
        <View style={styles.home_img}>
          <Image
            style={{ height: 100, width: 100, marginBottom: 10 }}
            source={require("../../assets/images/small-logo.png")}
            alt="home-image"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          SUBMIT COMPANY DETAILS
        </Text>
        <Box>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 2,
                backgroundColor: "#666",
                width: "75%",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingTop: 20,
            }}
          >
            <View
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 15,
                }}
              >
                Add Company Logo
              </Text>
            </View>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                backgroundColor: "#FDFADE",
                marginBottom: 20,
                marginTop: 10,
                width: "40%",
              }}
              onPress={pickDocument}
            >
              <FontAwesomeIcon
                style={{
                  color: "#888",
                }}
                icon={faImage}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 13,
                }}
              >
                Registration document
              </Text>
            </View>
            <View style={{ width: "40%" }}>
              <Button
                style={{
                  backgroundColor: "#D4C00B",
                  paddingVertical: 12,
                  borderRadius: 15,
                }}
                leftIcon={
                  <FontAwesomeIcon
                    style={{
                      color: "black",
                      paddingTop: 10,
                    }}
                    icon={faPaperclip}
                    size={10}
                  />
                }
                onPress={pickDocument}
              >
                <Text style={{ fontWeight: "600", fontSize: 11 }}>
                  Choose file
                </Text>
              </Button>
            </View>
          </View>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input
              type="text"
              variant="underlined"
              placeholder="Add Company Name"
            />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input
              type="email"
              variant="underlined"
              placeholder="Add Company Email ID"
            />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input
              type="text"
              variant="underlined"
              placeholder="Add Company Domain"
            />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input
              type="text"
              variant="underlined"
              placeholder="Company Details"
            />
          </FormControl>
          <View
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "#D4C00B",
                marginTop: 50,
                borderRadius: 10,
              }}
              title="submit"
              w="100%"
              size="lg"
              // onPress={() => navigation.navigate("success-job-post")}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                submit
              </Text>
            </Button>
          </View>
        </Box>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  home_img: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 50,
  },
  Form_Control: {
    paddingBottom: 5,
  },
});

export default CompanyDetailsForm;
