import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React, { useState } from "react";
import {
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
    content: "Week 1 report",
  },
  {
    title: "week 2",
    content: "Week 2 report",
  },
  {
    title: "week 3",
    content: "Week 3 report",
  },
  {
    title: "week 4",
    content: "Week 4 report",
  },
  {
    title: "week 5",
    content: "Week 5 report",
  },
];

const SELECTORS = [
  { title: "week 1", value: 0 },
  { title: "week 2", value: 1 },
  { title: "week 3", value: 2 },
  { title: "week 4", value: 3 },
  { title: "week 5", value: 4 },
];

function ReportClient({ navigation }) {
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
                  fontSize: 16,
                  color: "white",
                }}
              >
                {section.title}
              </Text>
            </Button>
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
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "400", fontSize: 19 }}>
                {section.content}
              </Text>
            </View>
            <View>
              <Button
                style={{
                  backgroundColor: "#61DB36",
                  borderRadius: 10,
                  marginLeft: 70,
                }}
                size="xs"
              >
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "black",
                    textTransform: "uppercase",
                  }}
                >
                  Download
                </Text>
              </Button>
            </View>
          </View>
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
      <View style={{ paddingHorizontal: 20, height: "100%" }}>
        <Image
          style={{ height: 70, width: 70, marginTop: 30 }}
          source={require("../../../../assets/images/small-logo.png")}
          alt="logo"
        />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 19,
            paddingTop: 20,
            textTransform: "capitalize",
            paddingBottom: 20,
            paddingLeft: 10,
          }}
        >
          weekly report
        </Text>
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
            onPress={() => navigation.navigate("complain")}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 13,
                color: "white",
              }}
            >
              Complaint
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
            // onPress={() => navigation.navigate("gift")}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 13,
                color: "white",
              }}
            >
              call back request
            </Text>
          </Button>
        </View>
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
});

export default ReportClient;
