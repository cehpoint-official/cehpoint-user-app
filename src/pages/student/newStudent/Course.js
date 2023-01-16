import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React, { useState } from "react";
import {
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CONTENT = [
  {
    title: "week 1",
    content: "Introduction to Cyber security",
    link: "https://meet.google.com/fhn-romm-fgf",
  },
  {
    title: "week 2",
    content: "Introduction to Cyber security",
    link: "https://meet.google.com/fhn-romm-fgf",
  },
  {
    title: "week 3",
    content: "Introduction to Cyber security",
    link: "https://meet.google.com/fhn-romm-fgf",
  },
  {
    title: "week 4",
    content: "Introduction to Cyber security",
    link: "https://meet.google.com/fhn-romm-fgf",
  },
];

const SELECTORS = [
  { title: "week 1", value: 0 },
  { title: "week 2", value: 1 },
  { title: "week 3", value: 2 },
  { title: "week 4", value: 3 },
];

function Course() {
  const insets = useSafeAreaInsets();
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View
          style={{
            backgroundColor: "#D4C00B",
            borderRadius: 10,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              backgroundColor: "black",
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Button
              leftIcon={
                <FontAwesomeIcon
                  style={{
                    color: "green",
                  }}
                  icon={faCircleCheck}
                  size={20}
                />
              }
              style={{
                backgroundColor: "black",
                borderRadius: 10,
              }}
              size="sm"
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 17,
                  color: "white",
                }}
              >
                {section.title}
              </Text>
            </Button>
            {/* <Text style={{ paddingRight: 10 }}>
              <FontAwesomeIcon
                style={{
                  color: "green",
                }}
                icon={faCircleCheck}
                size={20}
              />
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "white",
                paddingLeft: 10,
              }}
            >
              {section.title}
            </Text> */}
          </Text>
          <Text w="50%"></Text>
        </View>
      </Animatable.View>
    );
  };
  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? "bounceIn" : undefined}>
          <Text>Class Now: {section.content}</Text>
          {"\n"}
          <Text>
            Join Now:{" "}
            <Text
              style={{ color: "#2A55C3" }}
              onPress={() => Linking.openURL(section.link)}
            >
              {section.link}
            </Text>
          </Text>
        </Animatable.Text>
      </Animatable.View>
    );
  };
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
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ width: "50%" }}>
          <Image
            style={{ height: 70, width: 70, marginTop: 30 }}
            source={require("../../../../assets/images/small-logo.png")}
            alt="home-image"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Button
            style={{
              marginTop: 50,
              backgroundColor: "#D4C00B",
              marginStart: 40,
              borderRadius: 20,
              elevation: 18,
              opacity: 1,
            }}
            w="70%"
            size="xs"
          >
            <Text style={{ fontWeight: "400", fontSize: 15 }}>Assignment</Text>
          </Button>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 18,
          paddingTop: 20,
          textTransform: "uppercase",
          paddingBottom: 5,
          paddingLeft: 10,
        }}
      >
        cyber future career course
      </Text>
      <Button
        style={{
          marginTop: 15,
          backgroundColor: "black",
          borderRadius: 10,
          marginLeft: 10,
          marginBottom: 10,
        }}
        w="28%"
        size="xs"
      >
        <Text style={{ fontWeight: "400", fontSize: 10, color: "white" }}>
          Download link
        </Text>
      </Button>
      <View>
        <ScrollView>
          <View style={styles.selectors}>
            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => setSections([selector.value])}
              ></TouchableOpacity>
            ))}
          </View>
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      >
        <Button
          style={{
            backgroundColor: "black",
            borderRadius: 10,
          }}
          w="48%"
          size="sm"
          leftIcon={
            <FontAwesomeIcon
              style={{
                color: "green",
                paddingTop: 10,
              }}
              icon={faWhatsapp}
              size={20}
            />
          }
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 12,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            private group link
          </Text>
        </Button>
        <Button
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            marginLeft: 10,
          }}
          w="48%"
          size="lg"
          leftIcon={
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../../../assets/images/Vector.png")}
              alt="home-image"
            />
          }
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 13,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            cehpoint community
          </Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
  },
  header: {
    backgroundColor: "#D4C00B",
    padding: 10,
  },

  content: {
    padding: 20,
    backgroundColor: "#D4C00B",
    marginBottom: 5,
    marginHorizontal: 3,
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#D4C00B",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    textAlign: "center",
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default Course;
