// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Icon, Image, Input, Stack } from "native-base";
import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SignUp({ navigation }) {
  const [show, setShow] = React.useState(false);
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
      <View style={styles.home_img}>
        <Image
          style={{ height: 100, width: 100, marginBottom: 30 }}
          source={require("../../assets/images/small-logo.png")}
          alt="home-image"
        />
      </View>
      <View style={styles.top_loginLogout}>
        <Button.Group
          style={{ backgroundColor: "white" }}
          borderRadius="full"
          shadow="4"
          space={0}
        >
          <Button
            style={styles.login}
            borderRadius="full"
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.btn_text}>Login</Text>
          </Button>
          <Button
            style={styles.logout}
            borderRadius="full"
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.btn_text}>sign-up</Text>
          </Button>
        </Button.Group>
      </View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 60 }}>
        <Stack space={7} w="100%" alignItems="center">
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            placeholder="Name"
            type="text"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            placeholder="Email ID"
            type="email"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Confirm password"
          />
        </Stack>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{
            backgroundColor: "#D4C00B",
            marginTop: 60,
          }}
          title="log in"
          w="75%"
          size="md"
          borderRadius="full"
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Sign-up</Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home_img: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  top_head: {
    textAlign: "center",
    fontSize: 40,
    paddingBottom: 30,
    paddingTop: 60,
  },
  top_loginLogout: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  login: {
    color: "black",
    width: 130,
    backgroundColor: "white",
  },
  logout: { backgroundColor: "#D4C00B", width: 140 },
  btn_text: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default SignUp;
