import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Entypo';
import IconLocation from 'react-native-vector-icons/FontAwesome'
import { useRealTimeLocation } from "../../hooks/Common/useRealTimeLocation";

//importamos los estilos
import { styleHeader } from "./Header.style";

export default function Header() {
  //?usamos la ubicacion en tiempo real
  const { location, address } = useRealTimeLocation();

  return (
    <View style={styleHeader.container}>
      <View>
        <View style={styleHeader.containerGreeting}>
          <Text style={styleHeader.titleHeader}>Hola<Icon name="hand" size={50} color="#f5a623" /></Text>
          <Text style={styleHeader.username} >Luis Angel</Text>
        </View>

        <View style={styleHeader.containerLocation}>
          <IconLocation name="map-marker" size={15} color="#fff" />
          <Text style={styleHeader.location}>{address?.district}, {address?.street}</Text>
        </View>
      </View>
      <View>
        <Icon name="bell" size={24} color="#fff" />
      </View>
    </View>
  )
}


