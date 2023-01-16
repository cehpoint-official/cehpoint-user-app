import { MaterialIcons } from "@expo/vector-icons";
import { Button, Icon, Image, Input, Stack } from "native-base";
import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Login({ navigation }) {
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
      <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
        <Stack space={7} w="100%" alignItems="center">
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
        </Stack>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Stack space={4} w="75%" alignItems="flex-start">
          <Text style={{ fontSize: 17, fontWeight: "400", paddingTop: 10 }}>
            forget password ?
          </Text>
        </Stack>
        <Button
          style={{
            backgroundColor: "#D4C00B",
            marginTop: 100,
          }}
          title="log in"
          w="75%"
          size="md"
          borderRadius="full"
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Log in</Text>
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
    backgroundColor: "#D4C00B",
    width: 140,
  },
  logout: {
    color: "black",
    width: 130,
    backgroundColor: "white",
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Login;
