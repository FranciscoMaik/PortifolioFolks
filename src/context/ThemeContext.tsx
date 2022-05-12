/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import { theme, themeDark } from '../styles/Theme/theme';

interface ThemeSelected {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  fourColor: string;
  backgroundCard: string;
  backgroundPage: string;
  hover: string;
  boxShadowHover: string;
  colorText: string;
}

type ThemeContextType = {
  themeItem: ThemeSelected;
  setThemeItem: (themeSelected: ThemeSelected) => void;
  onOffDarkTheme: boolean;
  setOnOffDarkTheme: (item: boolean) => void;
  handleChangedTheme: () => void;
};

const initialValue: ThemeContextType = {
  themeItem: theme,
  setThemeItem: () => {},
  onOffDarkTheme: true,
  setOnOffDarkTheme: () => {},
  handleChangedTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialValue);

export const ThemeContextProvider: React.FC<React.ReactNode> = function ({
  children,
}) {
  const [themeItem, setThemeItem] = useState(initialValue.themeItem);
  const [onOffDarkTheme, setOnOffDarkTheme] = useState(
    initialValue.onOffDarkTheme
  );

  const handleChangedTheme = () => {
    if (onOffDarkTheme === true) {
      setOnOffDarkTheme(false);
      setThemeItem(themeDark);
    } else {
      setOnOffDarkTheme(true);
      setThemeItem(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeItem,
        setThemeItem,
        onOffDarkTheme,
        setOnOffDarkTheme,
        handleChangedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
