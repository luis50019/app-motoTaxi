import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleLoginScreen } from "../../screens/Auth/LoginScreen.style";

type PropsLink = {
  handlerClick: () => void;
  message:string;
};

export default function Link({ handlerClick,message }: PropsLink) {
  return (
    <TouchableOpacity onPress={handlerClick}>
      <Text style={StyleLoginScreen.linkText}>{message}</Text>
    </TouchableOpacity>
  );
}
