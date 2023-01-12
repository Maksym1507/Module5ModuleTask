import React, { createContext, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout/Layout";
import { IAppStore } from "./interfaces/appStore";
import AuthStore from "./stores/AuthStore";
import EmployeeStore from "./pages/Employee/EmployeeStore";
import ResourceListStore from "./pages/ResourceList/ResourceListStore";
import HomeStore from "./pages/Home/HomeStore";

export const homeStore = new HomeStore();
export const resourceListStore = new ResourceListStore();
export const employeeStore = new EmployeeStore();

const store: IAppStore = {
  authStore: new AuthStore(),
};

export const AppStoreContext = createContext(store);

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#757575",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  const [appStore, setAppStore] = useState(store);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppStoreContext.Provider value={appStore}>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </AppStoreContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
