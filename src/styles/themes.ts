export type Theme = {
  backgroundPrimary: string;
  backgroundSecondary: string;
  body: string;
  text: string;
  toggleBorder: string;
  headerColor: string
};

export const lightTheme: Theme = {
  backgroundPrimary: '#EAE6ED',
  backgroundSecondary: '#C2C0C2',
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  headerColor: '#FFFFFF',
};


export const darkTheme:Theme = {
  backgroundPrimary: '#091430',
  backgroundSecondary: '#091D3A',
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  headerColor: '#363537',
};

