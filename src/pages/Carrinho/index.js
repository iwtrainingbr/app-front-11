import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Button
} from "@mui/material";
import "./style.css";

export default function Carrinho () {
  const [quantity, setQuantity] = React.useState(0);
  const price = 11;

  const add = () => {
    setQuantity(quantity + 1);
  }

  const remove = () => {
    if (quantity === 0) {
      return;
    }

    setQuantity(quantity - 1);
  }

  return (
    <div className="page-carrinho">
      <Card>
        <CardContent>
          <h2>Carrinho</h2>
          <Divider/>

          <br/>
          Produto: Heineken <br/>
          Valor: R$ {price} <br/>
          Total: {quantity * price} <br/>



          <br/>
          <Button onClick={remove} variant="outlined">-</Button>
          {quantity}
          <Button onClick={add} variant="outlined">+</Button>
        </CardContent>


        <Button color="success" variant="contained">Sucesso</Button>
        <Button color="error" variant="contained">Erro</Button>
        <Button color="success" variant="contained">Sucesso</Button>
      </Card>
    </div>
  )
}
