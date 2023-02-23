const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;

const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export const validationSingIn = (values) => {
  let errors = {};
  if (!regexEmail.test(values.email))
    errors.email = "El usuario debe ser un email";
  else if (!values.email)
    errors.email = "El usuario no puede estar vacío";
  else if (values.email.lengh > 35)
    errors.email = "El nombre de usuario no debe ser mayor a 35 caracteres";
  if (values.password.lengh > 6 && values.password.lengh < 10)
    errors.password =
      "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  else if (!regexPassword.test(values.password))
    errors.password = "La contraseña debe tener al menos un número";
  return errors;
};