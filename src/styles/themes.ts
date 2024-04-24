export type Theme = {
  backgroundPrimary: string;
  backgroundSecondary: string;
  body: string;
  text: string;
  toggleBorder: string;
  headerColor: string
  backgroundSecondaryHover: string
};

export const lightTheme: Theme = {
  backgroundPrimary: '#EAE6ED',
  backgroundSecondary: '#E7E7E7',
  body: '#FFF',
  text: '#010003',
  toggleBorder: '#FFF',
  headerColor: '#FFFFFF',
  backgroundSecondaryHover: '#C2C0C2'
};


export const darkTheme:Theme = {
  backgroundPrimary: '#020d20',
  backgroundSecondary: '#091D3A',
  body: '#020d20',
  text: '#F4F4F5',
  toggleBorder: '#6B8096',
  headerColor: '#363537',
  backgroundSecondaryHover: '#183855'
};

