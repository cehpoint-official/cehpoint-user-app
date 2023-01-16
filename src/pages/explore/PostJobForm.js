import { faArrowLeftLong, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as DocumentPicker from "expo-document-picker";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function PostJobForm({ navigation }) {
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
          onPress={() => navigation.navigate("community-pool")}
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
              Post Jobs
            </Text>
          </View>
        </View>
        <Box>
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
              backgroundColor: "#FCFAEB",
              marginBottom: 20,
              marginTop: 10,
            }}
            onPress={pickDocument}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
              }}
              icon={faImage}
              size={30}
            />
          </TouchableOpacity>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input type="text" placeholder="Add Company Name" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input type="text" placeholder="Company Details" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <TextArea h={20} placeholder="Add Roles and Responsibilities" />
          </FormControl>
          <FormControl>
            <FormControl style={styles.Form_Control}></FormControl>
            <Input type="email" placeholder="Minimum salary in LPA" />
          </FormControl>
        </Box>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#D4C00B",
              marginTop: 40,
              borderRadius: 10,
            }}
            title="submit"
            w="75%"
            size="lg"
            onPress={() => navigation.navigate("success-job-post")}
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
});

export default PostJobForm;
