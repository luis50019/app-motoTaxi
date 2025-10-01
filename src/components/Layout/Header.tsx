import React, { useContext } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconLocation from "react-native-vector-icons/FontAwesome";
import { LocationContext } from "../../context/LocationContext";
//importamos los estilos
import { styleHeader } from "./Header.style";

export default function Header() {
  //?usamos la ubicacion en tiempo real
  const { address } = useContext(LocationContext);
  return (
    <View style={styleHeader.container}>
      <View>
        <View style={styleHeader.containerLocation}>
          <IconLocation name="map-marker" size={20} color="#fff" />
          {address?.street ? (
            <View>
              <Text style={styleHeader.neighborhood}>
                {address?.neighborhood}
              </Text>
              <View>
                <Text style={styleHeader.street}>{address?.street}</Text>
              </View>
            </View>
          ) : (
            loadingLocation()
          )}
        </View>
      </View>
      <View>
        <Icon name="bell" size={24} color="#fff" />
      </View>
    </View>
  );
}

function loadingLocation() {
  return (
    <View>
      <Text style={{ color: "#fff", fontSize: 15 }}>
        Detectando tu ubiacion actual ...
      </Text>
    </View>
  );
}
