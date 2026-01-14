import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

export interface ToastProps {
  message: string;
  type: "error" | "success";
  onHide: () => void;
}

const CustomToast = ({ message, type, onHide }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      className={`absolute top-12 left-5 right-5 z-50 p-4 rounded-2xl shadow-lg flex-row items-center ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <Text className="text-white font-semibold text-center flex-1">
        {message}
      </Text>
    </Animated.View>
  );
};

export default CustomToast;
