import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View,Image, StyleSheet,Text } from "react-native";
import IconMototaxi from "../components/Common/IconMototaxi";

type RootStackParamList = {
  Splash:undefined,
  Login:undefined
}

type Props = NativeStackScreenProps<RootStackParamList,"Splash">;

function SplashScreen ({navigation}:Props){

  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigation.replace("Login");
    },2500);

    return ()=> clearTimeout(timer);

  },[navigation])

  return(
    <View style={styles.container}>
      <IconMototaxi/>
      <Text style={styles.text}>Cargando ...</Text>
    </View>
  )

}

export default SplashScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:20,
    fontWeight:"bold"
  }
})
