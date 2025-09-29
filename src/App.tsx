import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

//*Importaciones de contextos
import { AuthProvider } from './context/AuthContext';

//*importaciones de las screen
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import HomeScree from './screens/User/HomeScreen';

//*declarando el stack de las pantallas
const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Home' component={HomeScree} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
     </SafeAreaProvider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:50,
    borderWidth:1,
    width:"70%",
    height:200
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
