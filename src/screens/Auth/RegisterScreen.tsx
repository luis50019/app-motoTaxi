//*importaciones de react
import React from "react";
import { useForm } from "react-hook-form";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";

//*Importaciones de tipos de datos
import { PropsAuth } from "../../types/StackAuth";
import { RegisterForm } from "../../types/RegisterFrom";

//*Impotaciones de componentes
import IconMototaxi from "../../components/Common/IconMototaxi";
import FormInput from "../../components/UI/FormInput";

//*importaciones de estilos
import { StyleRegisterScreen } from "./RegisterScreen.style";
import Link from "../../components/Common/Link";
import { passwordValidations, phoneValidations, usernameValidations } from "../../validations/authValidations";


function RegisterScreen({navigation}:PropsAuth){

  const {control,handleSubmit} = useForm<RegisterForm>();

  const onsubmit = (data:RegisterForm)=>{
    console.log("Informacion recibida: "+data.phone);
    console.log("Informacion recibida: "+data.password);
  }

  return(
    <View style={StyleRegisterScreen.container}>
      <IconMototaxi/>
      <View style={StyleRegisterScreen.container_form}>
        <Text style={{
          fontSize:70,
          fontWeight:"bold",
          fontFamily:"sanserif"
        }}>
          Crear cuenta
        </Text>
        <FormInput
          label="Nombre"
          control={control}
          name="name"
          keyboardType="default"
          secureTextEntry={false}
          placeholder="Luis Angel"
          rules={usernameValidations}
        />
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
          style={StyleRegisterScreen.button}
          onPress={handleSubmit(onsubmit)}
        >
          <Text>Crear cuenta</Text>
        </TouchableOpacity>
        <View>
          <Text>¿Ya tienes una cuenta?</Text>
          <Link message="Inicar sesion" handlerClick={()=>navigation.navigate("Login")} />
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen;
