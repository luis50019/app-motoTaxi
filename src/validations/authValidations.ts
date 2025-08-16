export const passwordValidations = {
  required: "La contraseña es obligatoria",
  minLength: {
    value: 6,
    message: "La contraseña debe de tener almenos 6 caracteers",
  },
  maxLength: {
    value: 15,
    message: "La contraseña no puede superar los 15 caracteres",
  },
};

export const usernameValidations = {
  required: "El nombre es obligatorio",
  minLength:{
    value:6,
    message:"El nombre debe tener al menos 6 caracteres"
  },
  maxLength:{
    value:15,
    message:"El nombre no puede superar los 15 caracteres"
  }

};

export const phoneValidations ={ 
  required: "El teléfono es obligatorio",
  minLength:{
    value:10,
    message:"El teléfono debe tener 10 díjitos"
  } ,
  maxLength:{
    value:10,
    message:"El teléfono debe tener 10 díjitos"
  },
  pattern:{
    value:"/^[0-9]+$/",
    message:"El teléfono solo debe contener números"
  }
};