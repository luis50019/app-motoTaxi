import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamListAuth = {
  Register:undefined;
  Login:undefined;
}

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamListAuth,"Login">;

export type PropsAuth = {
  navigation:LoginScreenNavigationProp;
}