import {Button, TextField} from "@mui/material";

export default function Example() {
  return (
    <div>
      <TextField label="Nome" variant="outlined"/>

      <Button color="success" variant="contained">Clique aqui</Button>

      <Button color="error" variant="outlined">Teste</Button>
    </div>
  )
}
