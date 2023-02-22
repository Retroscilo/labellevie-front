"use client";
import { createTheme } from "@mui/material";
import tailwind, { theme } from "./tailwind.config";

const colors = { ...tailwind.theme.extend.colors };

export default createTheme(theme, {
  palette: {
    info: {
      main: colors.titles,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: "white !important",
          "&::before": {
            content: "none",
          },
          "&::after": {
            borderColor: colors.titles,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.textlight,
          "&.Mui-focused": { color: colors.titles },
        },
        filled: {
          color: colors.titles,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          backgroundColor: colors.mauve,
          margin: 0,
          padding: "5px 10px",
        },
      },
    },
  },
});
