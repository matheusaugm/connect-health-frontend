import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Bounce, ToastContainer } from "react-toastify";
import { GlobalStyle } from "@/assets/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

type InitialProps = {
  name: string;
  version: string;
};

interface AppContextInterface {
  name: string;
  appTitle: string;
  pageTitle?: string | null;
  isLoading: boolean;
  pageActions?: React.ReactNode | null;
  setAppTitle: (value: string) => void;
  setPageTitle: (value: string | null) => void;
  setPageActions: (value: React.ReactNode | null) => void;
  setIsLoading: (value: boolean) => void;
}
interface AppProviderProps {
  children: ReactNode;
}

const initialState: InitialProps = {
  name: import.meta.env.VITE_REACT_APP_NAME,
  version: import.meta.env.VITE_REACT_APP_VERSION,
};
const AppContext = React.createContext<AppContextInterface>(
  {} as AppContextInterface,
);
const connectHealthTheme = {
  colors: {
    primary: "#C62727",
    secondary: "#253B6E",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    gray: "#929292",
    fontFormColor: "#9B9B9B",
    lightGray: "#EAEAEA",
    light: "#F6F6F6",

    dark: "#343a40",
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    primary: "Inter, sans-serif",
  },
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  breakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
const customMuiTheme = createTheme(
  {
    palette: {
      primary: {
        main: connectHealthTheme.colors.primary,
      },
      secondary: {
        main: connectHealthTheme.colors.gray,
      },
      success: {
        main: connectHealthTheme.colors.success,
      },
      error: {
        main: connectHealthTheme.colors.danger,
      },
      warning: {
        main: connectHealthTheme.colors.warning,
      },
      info: {
        main: connectHealthTheme.colors.secondary,
      },
    },
    typography: {
      fontFamily: connectHealthTheme.fonts.primary,
    },
    components: {
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: connectHealthTheme.colors.secondary,
            "&.Mui-selected": {
              color: "white",
            },
            "&.MuiBottomNavigationAction-root": {
              color: "white",
            },
          },
        },
        defaultProps: {
          style: {
            backgroundColor: connectHealthTheme.colors.secondary,
          },
        },
      },
    },
  },
  ptBR,
);
function AppProvider({ children }: AppProviderProps) {
  const [appTitle, setAppTitle] = useState<string>("app.title");
  const [pageTitle, setPageTitle] = useState<string | null>(null);
  const [pageActions, setPageActions] = useState<React.ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setAppTitle("Connect Health");
  }, []);

  return (
    <ThemeProvider theme={customMuiTheme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <StyledThemeProvider theme={connectHealthTheme}>
        <GlobalStyle />

        <AppContext.Provider
          value={{
            name: initialState.name,
            appTitle,
            pageTitle,
            pageActions,
            isLoading,
            setAppTitle,
            setPageTitle,
            setPageActions,
            setIsLoading,
          }}
        >
          {children}
        </AppContext.Provider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}
function useApp(): AppContextInterface {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useApp };
