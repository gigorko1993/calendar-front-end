import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("contacts/registerRequest");
export const registerSuccess = createAction("contacts/registerSuccess");
export const registerError = createAction("contacts/registerError");

export const loginRequest = createAction("contacts/loginRequest");
export const loginSuccess = createAction("contacts/loginSuccess");
export const loginError = createAction("contacts/loginError");

export const logoutRequest = createAction("contacts/logoutRequest");
export const logoutSuccess = createAction("contacts/logoutSuccess");
export const logoutError = createAction("contacts/logoutError");

export const fetchCurrentUserRequest = createAction(
  "auth/fetchCurrentUserRequest"
);
export const fetchCurrentUserSuccess = createAction(
  "auth/fetchCurrentUserSucces"
);
export const fetchCurrentUserError = createAction("auth/fetchCurrentUserError");
