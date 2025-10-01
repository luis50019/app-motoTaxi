import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Layout/Header";
import { LocationProvider } from "../../context/LocationContext";
export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LocationProvider>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatusBar style="dark" />
        <Header />
      </View>
    </LocationProvider>
  );
}

const styleHomePageUser = StyleSheet.create({
  body: {
    marginTop: 20,
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 60,
    fontWeight: "bold",
    color: "#000",
  },
});
