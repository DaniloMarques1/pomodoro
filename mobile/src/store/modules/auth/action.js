export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN = 'SIGN_IN';

export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  email,
  password,
});

export const signIn = token => ({ type: SIGN_IN, token });
