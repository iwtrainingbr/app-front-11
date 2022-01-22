import {useState, useEffect} from "react";
import {Divider} from "@mui/material";
const API_URL = 'https://front-11-project-default-rtdb.firebaseio.com';
export default function Categorias(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch (API_URL+'/categories.json')
      .then(response => response.json())
      .then(response => {
        let categorias = [];

        for (let id in response) {
          categorias.push(response[id]);
        }

        setData(categorias);
      });
  }, [])
  return (
    <div>
      <h2>listar categorias</h2>
      <Divider/>
      <ul>
        {data.map(cadaCategorias =>  (
            <li>{cadaCategorias.name}</li>
        ))}
      </ul>
    </div>
  )
}
