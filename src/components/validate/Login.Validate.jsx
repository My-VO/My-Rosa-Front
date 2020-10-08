export default function validateLogin(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Une adresse e-mail est obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Une adresse e-mail est obligatoire';
  }

  if (!values.password) {
    errors.password = 'Un mot de passe est obligatoire';
  } else if (values.password.length < 10) {
    errors.password = 'Le mot de passe doit faire au moins 10 caractères';
  }

  return errors;
}
