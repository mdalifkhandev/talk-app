import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgatePassword = () => {
  const [email, setEmail] = React.useState("");
  const handleLogin = () => {
    console.log("forgate password");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-blue-600"
    >
      {/* {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onHide={() => setToast(null)}
        />
      )} */}
      <View className="flex-1 items-center justify-center">
        <View className="w-full px-5">
          <Text className="text-white font-bold text-4xl text-center">
            Forgate Password
          </Text>

          {/* email label */}
          <Text className="text-white mt-5">Email</Text>

          {/* email inpute */}
          <TextInput
            className="bg-white rounded-xl mt-3 px-5"
            placeholder="Pleace input your Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          {/* button  */}
          <TouchableOpacity
            onPress={handleLogin}
            className={`rounded-xl mt-5 py-4 bg-white`}
          >
            <Text className={`text-center font-bold text-blue-600`}>
              Send OTP
            </Text>
          </TouchableOpacity>

          {/* dont have account */}

          <TouchableOpacity
            onPress={() => router.push("/(auth)/signup")}
            className="items-center px-5 py-3"
          >
            <Text className="text-white ">Back To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgatePassword;
