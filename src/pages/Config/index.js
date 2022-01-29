import {useState} from "react";
import {Switch} from  "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";


export default function Config(props){
  const [darkmode, setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    props.handleTheme(!darkmode);
  };

  return(

    <div>
      <h1>Página de configuração</h1>

      <Switch checked={darkmode} onChange={handleDarkmode} data-cy="btn-dark-mode" />
      Modo Escuro
    </div>

  )
}
