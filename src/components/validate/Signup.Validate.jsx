export default function validateSignup(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Un prénom est obligatoire';
  }

  if (!values.lastName) {
    errors.lastName = 'Un nom est obligatoire';
  }
  if (!values.email) {
    errors.email = 'Une adresse e-mail est obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Une adresse e-mail est obligatoire.';
  }

  if (!values.password) {
    errors.password = 'Un mot de passe est obligatoire';
  } else if (values.password.length < 10) {
    errors.password = 'Le mot de passe doit faire au moins 10 caractères';
  }

  if (!values.confirmedPassword) {
    errors.confirmedPassword = 'Un mot de passe est obligatoire';
  } else if (values.confirmedPassword.length < 10) {
    errors.confirmedPassword =
      'Le mot de passe doit faire au moins 10 caractères';
  } else if (values.password !== values.confirmedPassword) {
    errors.confirmedPassword = 'Les mots de passe ne correspondent pas';
  }

  return errors;
}
