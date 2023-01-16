import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Image,
  Input,
  ScrollView,
  Select,
  StatusBar,
} from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function NewStudentFrom({ navigation }) {
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
        <Image
          style={{ height: 70, width: 70, marginTop: 30 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="home-image"
        />
        <Text
          style={{
            textTransform: "capitalize",
            paddingVertical: 20,
            fontWeight: "500",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Necessary details
        </Text>
        <Box alignItems="center">
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Name
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Guardian Name
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Phone Number
            </FormControl>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Email Id
            </FormControl>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Address
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Your Learning Interest
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Your Future Goats
            </FormControl>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              How did you hear about us
            </FormControl>
            <Select
              accessibilityLabel=""
              placeholder=""
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              // style={{ borderWidth: 1 }}
            >
              <Select.Item label="Google" value="Google" />
              <Select.Item label="Friends" value="Friends" />
              <Select.Item label="Colleague" value="Colleague" />
              <Select.Item label="Cehpoint stuff" value="Cehpoint stuff" />
              <Select.Item label="Other" value="Other" />
            </Select>
          </FormControl>
        </Box>
        <Button
          style={{
            marginTop: 30,
            backgroundColor: "#D4C00B",
            paddingVertical: 12,
            borderRadius: 10,
            marginBottom: 60,
          }}
          size="sm"
          onPress={() => navigation.navigate("prospect-id")}
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default NewStudentFrom;
