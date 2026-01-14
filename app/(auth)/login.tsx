import React from "react";
import { Text, View } from "react-native";

const login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <View className=" w-full px-5">
        <Text className="text-white font-bold text-4xl text-center">Login</Text>

        {/* label */}
        <Text className="text-white mt-5">Email</Text>
      </View>
    </View>
  );
};

export default login;
