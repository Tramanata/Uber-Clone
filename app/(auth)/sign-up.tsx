import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSignUpPress = async () => {
    // Handle sign-up logic here
  };

  return (
    <ScrollView style={styles.view}>
      <View style={styles.view}>
        {/* Header Section */}
        <View style={styles.viewtwo}>
          <Image source={images.signUpCar} style={styles.image} />
          <Text style={styles.text}>Create Your Account</Text>
        </View>

        {/* Input Fields */}
        <View>
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: any) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value: any) => setForm({ ...form, password: value })}
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            bgVariant="undefined"  // Change the background variant as needed (success, danger, etc.)
            textVariant="default"  // Adjust text color variant
            style={styles.signupButton}  // Optional custom style for the button
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  viewtwo: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 275,
    zIndex: 0,
  },
  text: {
    fontFamily: "Jakarta-Bold",
    fontSize: 24,
    position: "absolute",
    bottom: 17,
    left: 10,
  },
  signupButton: {
    marginTop: 20,  // Increased margin for better spacing
    height: 50,     // Adjusted height to make the button bigger
    width: "80%",   // Make the button take more width
    alignSelf: "center", // Center the button horizontally
  },
});