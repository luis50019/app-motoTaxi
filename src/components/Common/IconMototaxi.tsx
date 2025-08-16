import { Image, StyleSheet } from "react-native"

//*importando la imagen
const ImageMototaxi = require("../../../assets/Images/logo.png");

export default function IconMototaxi(){
  return(
    <Image
      style={stylesIcon.image}
      source={ImageMototaxi}
      resizeMode="contain"
    />
  )
}

const stylesIcon = StyleSheet.create({
  image:{
    width:250,
    height:250
  },
})
