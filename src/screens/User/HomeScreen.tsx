import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import Header from "../../components/Layout/Header";
import { LocationProvider } from "../../context/LocationContext";
import MapScreen from "../Maps/MapScreen";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LocationProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatusBar style="dark" />
        <Header />
        <MapScreen />
      </View>
    </LocationProvider>
  );
}
