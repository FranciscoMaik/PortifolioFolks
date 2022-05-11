import { invert } from 'polished';

export const theme = {
  primaryColor: '#13224a',
  secondaryColor: '#5b6a9a',
  thirdColor: '#81899c',
  fourColor: '#4a90e2',
  backgroundCard: '#e2e5ed',
  backgroundPage: '#fefefe',
  hover: '#fff',
  boxShadowHover: '#ddd',
};

export const themeDark = {
  primaryColor: invert('#13224a'),
  secondaryColor: invert('#5b6a9a'),
  thirdColor: invert('#81899c'),
  fourColor: invert('#4a90e2'),
  backgroundCard: invert('#e2e5ed'),
  backgroundPage: invert('#fefefe'),
  hover: invert('#fff'),
  boxShadowHover: invert('#ddd'),
};
