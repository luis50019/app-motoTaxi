import { StyleSheet, Text, View } from "react-native";

export default function HomeScree (){
  return(
    <View style={styleHomeClient.container}>
      <Text>
        Home page del cliente
      </Text>
    </View>
  )
}

const styleHomeClient = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
})
