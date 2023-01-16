import {
  faArrowLeftLong,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "native-base";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SuccessfulJobPost({ navigation }) {
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
      <View style={{ paddingHorizontal: 20, height: "100%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
            alignItems: "center",
            paddingTop: 20,
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
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 70,
          }}
        >
          <FontAwesomeIcon
            style={{
              color: "green",
            }}
            icon={faCircleCheck}
            size={30}
          />
          <Text style={{ fontSize: 15, fontWeight: "700", paddingTop: 15 }}>
            You successfully posted job
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            position: "absolute",
            bottom: 50,
            left: 25,
          }}
        >
          <Button
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              marginRight: 20,
            }}
            shadow="4"
            size="md"
            w="46%"
            onPress={() => navigation.navigate("community-pool")}
          >
            <Text style={styles.btn_text}>Back</Text>
          </Button>
          <Button
            style={{
              backgroundColor: "#D4C00B",
              borderRadius: 10,
            }}
            shadow="4"
            size="md"
            w="46%"
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btn_text}>add a post</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: "relative",
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

export default SuccessfulJobPost;
