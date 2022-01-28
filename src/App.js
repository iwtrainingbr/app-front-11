import {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./components/MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles.css";

import {createTheme, ThemeProvider} from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#C90011'
    },
    secondary: {
      main: '#00C9B8'
    },
    success: {
      main: '#00645C'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#333'
    },
    secondary: {
      main: '#fff'
    },
    success: {
      main: '#bcbcbc'
    }
  }
});

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const handleTheme = (darkmode) => {
    setCurrentTheme(darkmode ? darkTheme : defaultTheme);
    //
    // if (darkmode === true) {
    //   setCurrentTheme(darkTheme);
    // } else {
    //   setCurrentTheme(defaultTheme);
    // }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <Navbar/>

        <MyRoutes handleTheme={handleTheme}/>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
