export type ColorType = {
    primary: string;
    secondary: string;
    light: string;
};

export type BackgroundColorType = {
    primary: string;
    secondary: string;
    light: string;
};

export type ThemeType = {
    color: ColorType;
    backgroundColor: BackgroundColorType;
};

export const darkTheme: ThemeType = {
    color: {
        primary: "wight",
        secondary: "#999999",
        light: "#bbbbbb",
    },
    backgroundColor: {
        primary: "#292929",
        secondary: "#999999",
        light: "#bbbbbb",
    },
};

export const lightTheme: ThemeType = {
    ...darkTheme,
    color: {
        primary: "black",
        secondary: "#010101",
        light: "#eeeeee",
    },
    backgroundColor: {
        primary: "wight",
        secondary: "#999999",
        light: "#eeeeee",
    },
};