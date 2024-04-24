// src/styles/themes.js
export type Theme = {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
};

export const lightTheme: Theme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
};


export const darkTheme:Theme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
};

