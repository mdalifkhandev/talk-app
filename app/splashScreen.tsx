import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = () => {
  return (
    <View className="flex-1 bg-blue-600 justify-center items-center">
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />

      <Animatable.View
        animation="bounceIn"
        duration={1500}
        className="bg-white p-5 rounded-[30px] shadow-2xl"
      >
        {/* logo */}
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={50}
          color="#2563eb"
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={500} duration={1000}>
        <Text className="text-white text-3xl font-bold mt-5 tracking-widest">
          REAL TALK
        </Text>
        <Text className="text-blue-100 text-center text-sm mt-1 opacity-80">
          Stay Connected, Always.
        </Text>
      </Animatable.View>

      {/* footer */}
      <View className="absolute bottom-10">
        <Text className="text-blue-200 text-sm font-bold tracking-tighter uppercase">
          Powered by Alif Khan
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
