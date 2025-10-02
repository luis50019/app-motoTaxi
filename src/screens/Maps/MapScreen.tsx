import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import Modal from "../../components/Layout/Modal";
import MapViewDirections from "react-native-maps-directions";
type Destination = {
  latitude: number;
  longitude: number;
};

export default function MapScreen() {
  const { location } = useContext(LocationContext);
  const [destination, setDistination] = useState<Destination | null>(null);

  //TODO: separar la logica de mostrar y no mostrar el modal
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  const handlerClickMaps = (coordinates: Destination) => {
    setDistination(coordinates);
  };

  return (
    <View style={styles.container}>
      <MapView
        onPress={({ nativeEvent }) => {
          showModal();
          handlerClickMaps(nativeEvent.coordinate);
        }}
        style={styles.map}
        initialRegion={{
          latitude: location?.latitude || 16.788963,
          longitude: location?.longitude || -96.663457,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.latitude || 16.788963,
            longitude: location?.longitude || -96.663457,
          }}
        />
        {destination && (
          <>
            <Marker
              onPress={() => setDistination(null)}
              coordinate={destination}
            />
            <MapViewDirections
              strokeColor="#3B82F6"
              strokeWidth={5}
              mode="DRIVING"
              destination={destination}
              origin={{
                latitude: location?.latitude || 16.788963,
                longitude: location?.longitude || -96.663457,
              }}
              apikey={"AIzaSyDIrpCNK96weWpWYmOxt87rDjlPw2_z9mk"}
            />
          </>
        )}
      </MapView>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <Text>hola</Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  infoPoint: {
    height: "auto",
    backgroundColor: "#000",
  },
});

