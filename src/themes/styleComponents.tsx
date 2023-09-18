import {Dimensions} from 'react-native';

export const colors = {
  base: {
    white: '#FFFFFF',
    black: '#000000',
    green: '#9CCB86',
  },
  orange: '#FFC996',
  gray: '#949494',
  darkGray: '#767676',
  red: '#FC3922',
};

export const windowWidth = Dimensions.get('window').width;

const defaultSpace = 4;

const theme = {
  colors,
  windowWidth,
  spaces: (space: number) => `${space * defaultSpace}px`,
};

export default theme;
