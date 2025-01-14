import React from 'react';
import { KeyboardAvoidingView, Text, TouchableWithoutFeedback, View, TextInput, StyleSheet, Image, Platform, Keyboard } from "react-native";

const InputField = ({ label, labelStyle, icon, secureTextEntry = false, containerStyle, inputStyle, iconStyle, className, ...props }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.view, containerStyle]}>
          {/* Label */}
          <Text style={[styles.textStyle, labelStyle]}>
            {label}
          </Text>

          {/* Input Field */}
        <View style={[styles.inputStyle, inputStyle]}>
                {icon && (
                    <Image source={icon} style={[styles.imageStyle, iconStyle]}/>
                )}
                <TextInput 
                    style={styles.textInputStyle}
                    placeholderTextColor="#999"
                    secureTextEntry={secureTextEntry}
                    {...props}
                />
            
        </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;

const styles = StyleSheet.create({
  view: {
    marginVertical: 8,
    width: "100%",
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "Jakarta-Bold",
    marginBottom: 8,
    marginLeft: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    width: "90%",
    marginLeft: 10,
    backgroundColor: "#f5f5f5",
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  textInputStyle: {
    width: "91%",
    marginLeft: 10,
    backgroundColor: "#f5f5f5",
  },
});
