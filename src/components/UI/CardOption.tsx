import { Text, View, ImageBackground, StyleSheet } from "react-native"

interface propsCard {
  urlImage: any;
  label: string;
};


export const CardOption = ({ urlImage, label }: propsCard) => {
  return (
    <ImageBackground
      source={urlImage}
      style={styleCard.Card}
      imageStyle={{ borderRadius: 10 }}
    >
      <Text style={styleCard.label}>{label}</Text>
    </ImageBackground>

  )
}

const styleCard = StyleSheet.create({
  Card: {
    width: 147,
    height: 250,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden"
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 5,
    paddingBottom: 10
  }
})

