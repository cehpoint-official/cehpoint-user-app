import {
  faArrowLeftLong,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as DocumentPicker from "expo-document-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function InternshipForm({ navigation }) {
  const insets = useSafeAreaInsets();
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
      <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 5,
          }}
          onPress={() => navigation.goBack()}
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
          <View style={{ width: "30%" }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../../../../assets/images/small-logo.png")}
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
              Internship Details
            </Text>
          </View>
        </View>
        <Box alignItems="center">
          <FormControl>
            <FormControl style={styles.Form_Control}>
              <Text style={styles.level}>Name</Text>
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}>
              <Text style={styles.level}>Address</Text>
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}>
              <Text style={styles.level}>Phone Number</Text>
            </FormControl>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}>
              <Text style={styles.level}>Email Id</Text>
            </FormControl>
            <Input type="email" />
          </FormControl>
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
                  fontSize: 13,
                }}
              >
                Upload your College ID card
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              textTransform: "uppercase",
              paddingTop: 30,
              paddingBottom: 10,
            }}
          >
            submit your answer
          </Text>
        </Box>
        <View>
          <Text style={styles.que}>
            1. Are you serious for this Internship?
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "16%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.answer_tx}>Answer: </Text>
            </View>
            <View style={{ width: "84%" }}>
              <FormControl>
                <Input variant="underlined" style={{ borderBottomWidth: 1 }} />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>2. Are you ready for short assessment?</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "16%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.answer_tx}>Answer: </Text>
            </View>
            <View style={{ width: "84%" }}>
              <FormControl>
                <Input variant="underlined" style={{ borderBottomWidth: 1 }} />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>
            3. Let us know your expectation? (Stipend)
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "16%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.answer_tx}>Answer: </Text>
            </View>
            <View style={{ width: "84%" }}>
              <FormControl>
                <Input variant="underlined" style={{ borderBottomWidth: 1 }} />
              </FormControl>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{
              marginVertical: 30,
              backgroundColor: "#D4C00B",
              paddingVertical: 12,
              borderRadius: 10,
              width: "70%",
            }}
            size="sm"
            onPress={() => navigation.navigate("company-details-form")}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              submit
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  Form_Control: {
    paddingBottom: 5,
  },
  level: {
    fontSize: 12,
    fontWeight: "600",
    paddingTop: 5,
  },
  answer_tx: {
    fontSize: 12,
    fontWeight: "600",
  },
  que: {
    fontSize: 13,
    fontWeight: "600",
    paddingTop: 20,
  },
});

export default InternshipForm;
