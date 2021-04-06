export const nameInput = (name) => {
  return {
    type: "NAME_INPUT",
    payload: name,
  };
};

export const passwordInput = (pass) => {
  return {
    type: "PASSWORD_INPUT",
    payload: pass,
  };
};

export const logIn = () => {
  return {
    type: "LOGIN",
  };
};
