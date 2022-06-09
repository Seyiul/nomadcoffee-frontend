import { ApolloProvider, useReactiveVar } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { darkModeVar, isLoggedInVar, client } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import SignUp from "./screens/SignUp";
import routes from "./routes";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import CreateShop from "./screens/CreateShop";
import Details from "./screens/Details";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Header />
            <Routes>
              <Route
                path={routes.home}
                element={isLoggedIn ? <Home /> : <Login />}
              />
              <Route
                path={routes.signUp}
                element={!isLoggedIn ? <SignUp /> : null}
              />
              <Route path={routes.createShop} element={<CreateShop />} />
              <Route path={routes.showShop} element={<Details />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
