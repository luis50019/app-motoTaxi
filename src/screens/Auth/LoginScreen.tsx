//*importaciones de react
import React from "react";
import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";

//*Importaciones de tipos de datos
import { LoginForm } from "../../types/LoginForm";
import { PropsAuth } from "../../types/StackAuth";

//*Impotaciones de componentes
import IconMototaxi from "../../components/Common/IconMototaxi";
import FormInput from "../../components/UI/FormInput";

//*importaciones de estilos
import { StyleLoginScreen } from "./LoginScreen.style";
import Link from "../../components/Common/Link";

//*Hooks
import { UseAuth } from "../../hooks/UseAuth";

//* validaciones
import { passwordValidations, phoneValidations } from "../../validations/authValidations";

function LoginScreen({ navigation }: PropsAuth) {
  const { control, handleSubmit } = useForm<LoginForm>();
  const { AuthLogin,errorMessage } = UseAuth();
  
  const navigatePage = ()=>{
    navigation.navigate("Home");
  }


  return (
    <View style={StyleLoginScreen.container}>
      <IconMototaxi />
      <View style={StyleLoginScreen.container_form}>
        <Text
          style={{
            fontSize: 70,
            fontWeight: "bold",
            fontFamily: "sanserif",
          }}
        >
          Inicar sesión
        </Text>
        <FormInput
          label="Telefono"
          control={control}
          name="phone"
          keyboardType="numeric"
          secureTextEntry={false}
          placeholder="9511283036"
          rules={phoneValidations}
        />
        <FormInput
          label="Contraseña"
          control={control}
          name="password"
          keyboardType="default"
          secureTextEntry={true}
          placeholder="****"
          rules={passwordValidations}
        />
        <TouchableOpacity
          style={StyleLoginScreen.button}
          onPress={navigatePage}
        >
          <Text>Ingresar</Text>  
        </TouchableOpacity>
        <View>
          <Text style={StyleLoginScreen.error}>{errorMessage.error}</Text>
        </View>
        <View>
          <Text>¿No tienes una cuenta?</Text>
          <Link
            message="Crear cuenta"
            handlerClick={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
