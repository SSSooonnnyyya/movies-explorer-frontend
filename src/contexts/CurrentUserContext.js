import React from "react";

export const CurrentUserContext = React.createContext();

export const currentUser = {
  _id: '',
  email: '',
  password: '',
  name: ''
};