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
import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ApiURL } from "../../../../App";

function NewStudentFrom(navigation) {
  const insets = useSafeAreaInsets();
  //states
  const [name, setName] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [interest, setInterest] = useState('');
  const [goals, setGoals] = useState('');
  const [source, setSource] = useState(null);

  async function callAPI(){
    const url = ApiURL +  '/newstudentdetails';
    
    const params = navigation.route.params;
    const packet = {
      name,
      guardianName,
      phoneNumber,
      email,
      address,
      interest,
      goals,
      source,
      ...params
    };

    let res = null;
    try{
      res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(packet)
      });
    } catch (e) {
      console.warn('no connection');
      return;
    }
    
    if(!res.ok){
      console.log('internal server error');
      return;
    }

    try {
      let request_key = await res.json();
      if(request_key?.key){
        navigation.navigation.navigate("prospect-id", {request_key: request_key.key});
        return;
      }
    } catch (e){
      console.log('internal server error')
    }
  }


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
            <Input type="text" onChangeText={text=>setName(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Guardian Name
            </FormControl>
            <Input type="text" onChangeText={text=>setGuardianName(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Phone Number
            </FormControl>
            <Input type="number" onChangeText={text=>setPhoneNumber(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Email Id
            </FormControl>
            <Input type="email" onChangeText={text=>setEmail(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Address
            </FormControl>
            <Input type="text" onChangeText={text=>setAddress(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Your Learning Interest
            </FormControl>
            <Input type="text" onChangeText={text=>setInterest(text)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Your Future Goals
            </FormControl>
            <Input type="text" onChangeText={text=>setGoals(text)}/>
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
              value={source}
              onValueChange={(itemValue, itemIndex)=> setSource(itemValue)}
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
          onPress={callAPI}
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
