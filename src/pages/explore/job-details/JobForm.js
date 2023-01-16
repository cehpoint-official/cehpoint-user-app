import {
  faArrowLeftLong,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
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

function JobForm({ navigation }) {
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
              Job Details
            </Text>
          </View>
        </View>
        <Box>
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
          <Text style={styles.text}>I completed three internships before</Text>
          <HStack space={6} style={{ paddingVertical: 15 }}>
            <Checkbox value="test" defaultIsChecked>
              <Text style={styles.text}>Yes</Text>
            </Checkbox>
            <Checkbox value="test">
              <Text style={styles.text}>No</Text>
            </Checkbox>
          </HStack>
          <Text style={styles.text}>
            Upload your offer letter or payment receipt
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingTop: 20,
            }}
          >
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
            <Button
              style={{
                backgroundColor: "#D4C00B",
                paddingVertical: 12,
                borderRadius: 15,
                marginHorizontal: 15,
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              textTransform: "uppercase",
              paddingTop: 30,
              paddingBottom: 10,
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            submit your answer
          </Text>
        </Box>
        <View>
          <Text style={styles.que}>1. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>2. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>3. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>4. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>5. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>6. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>7. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>8. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>9. Question?</Text>
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
                <Input variant="underlined" />
              </FormControl>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.que}>10. Question?</Text>
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
                <Input variant="underlined" />
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
  text: {
    fontSize: 13,
    fontWeight: "600",
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

export default JobForm;
