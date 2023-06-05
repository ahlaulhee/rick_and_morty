const validate = (inputs) => {
  let errors = {};
  if (!inputs.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
    errors.email = "El email no es válido";
  } else if (inputs.email.length > 35) {
    errors.email = "El mail no puede tener mas de 35 caraceteres";
  }
  if (!inputs.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  return errors;
};

module.exports = validate;
