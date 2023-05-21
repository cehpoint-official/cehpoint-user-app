import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Image,
  Input,
  ScrollView,
  Select,
} from "native-base";
import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function NewClientForm({ navigation }) {
  const insets = useSafeAreaInsets();

  //states
  const [representativeName, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [requirement, setRequirement] = useState('');
  const [deadline, setDeadline] = useState('');
  const [source, setSource] = useState('');
  const [budget, setBudget] = useState('');

  async function callAPI(){
    const url = 'http://127.0.0.1:5000/newclientdetails';
    
    const phoneRegex = /^[0-9]{10}$/;
    const budgetRegex = /^[0-9]+(\.[0-9]+)?$/;

    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Invalid phone number");
      return;
    }
    else if (!budgetRegex.test(budget)) {
      Alert.alert("Invalid budget");
      return;
    }

    const packet = {
      "representative_name": representativeName,
      "company_name": companyName,
      "phone_number": phoneNumber,
      email,
      address,
      requirement,
      deadline,
      source,
      budget
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
        navigation.navigate("client-id", {'request_key': request_key.key});
        return;
      }
    } catch (e){
      console.log('internal server error', e)
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
              Representative Name
            </FormControl>
            <Input type="text" onChangeText={(val)=>setName(val)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Company Name
            </FormControl>
            <Input type="text" onChangeText={(val)=>setCompanyName(val)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Phone Number
            </FormControl>
            <Input type="number" onChangeText={(val)=>setPhoneNumber(val)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Email ID
            </FormControl>
            <Input type="email" onChangeText={(val)=>setEmail(val)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Address
            </FormControl>
            <Input type="text" onChangeText={(val)=>setAddress(val)}/>
          </FormControl>
          <FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              Explain your requirement
            </FormControl>
            <Input type="text" onChangeText={(val)=>setRequirement(val)}/>
          </FormControl>
          <FormControl style={{ color: "black", paddingBottom: 5 }}>
              What will be the project finish Deadline if we start working on your project next Monday?
            <Input type="text" onChangeText={(val)=>setDeadline(val)}/>
          </FormControl>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              What's your budget for this project? (optional)
              <Input type="text" onChangeText={(val)=>setBudget(val)}/>
            </FormControl>
          <FormControl isRequired>
            <FormControl style={{ color: "black", paddingBottom: 5 }}>
              How did you hear about us
            </FormControl>
            <Select
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={20} />,
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
            marginBottom: 50,
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

export default NewClientForm;
