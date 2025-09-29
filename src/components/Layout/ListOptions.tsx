import { StyleSheet, Text, View } from "react-native"
import { CardOption } from "../UI/CardOption"
import { Title } from "../Common/Title"
const InfoCard = [
  {
    url: require("../../../assets/Images/ShippingService.jpg"),
    text: "Servicio de envios"
  },
  {
    url: require("../../../assets/Images/SharedService.jpg"),
    text: "Servicio compartido"
  }, {
    url: require("../../../assets/Images/ServicePrivate.jpg"),
    text: "Servicio Privado"
  }
]

export const ListOptions = () => {
  return (
    <View>
      <Text style={{ color: "#000", paddingHorizontal: 15, fontWeight: "light", fontSize: 30 }}>Nuestros Servicios</Text>
      <View style={styleListOptions.container}>
        {
          InfoCard.map((item, index) => (
            <CardOption label={item.text} urlImage={item.url} key={index} />
          ))
        }
      </View>
    </View>
  )
}

const styleListOptions = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    paddingHorizontal: 15
  }
})


