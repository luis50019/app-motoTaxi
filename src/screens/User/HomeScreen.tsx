import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, } from "react-native";
import Header from "../../components/Layout/Header";
import { ListOptions } from '../../components/Layout/ListOptions';
import { Title } from '../../components/Common/Title';
//const insets = useSafeAreaInsets();

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      display: 'flex',
      flexDirection: 'column'
    }} >
      <StatusBar style="dark" />
      <Header />
      <View style={styleHomePageUser.body}>
        <ListOptions />
        <Title title='Conductor de' subtitle='la semana' />
      </View>

    </ View>
  );
};

const styleHomePageUser = StyleSheet.create({
  body: {
    marginTop: 20
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 60,
    fontWeight: "bold",
    color: "#000"
  }
})

