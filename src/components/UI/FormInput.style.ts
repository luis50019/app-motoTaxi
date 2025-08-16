import { StyleSheet } from "react-native";

export const styleFormInput = StyleSheet.create({
  container: { 
    width:"100%",
    marginBottom:10,
  },
  input: {
    width:"100%",
    height:45,
    paddingLeft:5,
    color:"#555",
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 2,
  },
  labelInput:{
    paddingLeft:5,
    fontSize:20,
    fontWeight:"400"
  }
});