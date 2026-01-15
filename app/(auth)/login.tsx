import CustomToast from "@/components/Toast";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ToastType = "error" | "success";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  // toast
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setToast({
        message: "Pleace input valid email",
        type: "error",
      });
      return;
    }

    if (password.length < 6) {
      setToast({
        message: "Password must be at least 6 characters",
        type: "error",
      });
      return;
    }

    if (!isRemember) {
      setToast({
        message: "Pleace agree with our terms and condition",
        type: "error",
      });
      return;
    }
    setToast({
      message: "Login successful",
      type: "success",
    });
    console.log("login", password, email);
  };

  return (
    <LinearGradient
      colors={["#00D4FF", "#020024"]}
      locations={[0.2, 1]}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 "
      >
        {toast && (
          <CustomToast
            message={toast.message}
            type={toast.type}
            onHide={() => setToast(null)}
          />
        )}
        <View className="flex-1 items-center justify-center">
          <View className="w-full px-5">
            <Text className="text-white font-bold text-4xl text-center">
              Login
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
            {/* password label */}
            <Text className="text-white mt-5">Passwoed</Text>

            {/* password inpute */}
            <View className="flex-row items-center justify-between bg-white rounded-xl mt-3 px-5">
              <TextInput
                className="flex-1"
                placeholder="Pleace input your Password"
                secureTextEntry={showPassword ? false : true}
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Feather name="eye-off" size={24} color="#2563eb" />
                ) : (
                  <Feather name="eye" size={24} color="#2563eb" />
                )}
              </TouchableOpacity>
            </View>

            {/* agree and forgate password */}
            <View className="flex-row justify-between mt-5">
              <TouchableOpacity
                onPress={() => setIsRemember(!isRemember)}
                className="flex-row items-center justify-center gap-4"
              >
                <View className=" bg-white h-6 w-6 rounded-full flex-row items-center justify-center">
                  {isRemember && (
                    <Entypo name="check" size={20} color="#2563eb" />
                  )}
                </View>
                <Text className="text-white">Remember Me</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/forgate-password")}
              >
                <Text className="text-white underline">Forgate Password ?</Text>
              </TouchableOpacity>
            </View>

            {/* button  */}
            <TouchableOpacity
              onPress={handleLogin}
              className={`rounded-xl mt-5 py-4 bg-white`}
            >
              <Text className={`text-center font-bold text-blue-600`}>
                Login
              </Text>
            </TouchableOpacity>

            {/* dont have account */}
            <View className="flex-row justify-center mt-5">
              <Text className="text-white">Don't have an account ?</Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                <Text className="text-white underline">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default login;
