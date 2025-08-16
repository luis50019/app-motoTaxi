import { StyleSheet } from "react-native";

export const StyleLoginScreen = StyleSheet.create({
  container: {
    height:"100%",
    backgroundColor:"#fff",
    flexDirection:"column",
    alignItems: "center", 
    justifyContent:"center",
    gap:50,
  },
  button: {
    width:"100%",
    borderWidth:1,
    borderColor:"#000",
    backgroundColor:"#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  disabledButton: {
    backgroundColor: '#999',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledText: {
    color: '#000',
  },
  container_form:{
    width:"80%",
    height:"45%",
    gap:20,
    paddingTop:0,
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    paddingHorizontal:10,
    justifyContent:"flex-start"
  },
  linkText: {
    color: 'blue',
    fontWeight:"700",
    fontSize: 16,
  },
  error:{
    color:"#f00",
    fontWeight:"500",
    fontSize:15
  }
});