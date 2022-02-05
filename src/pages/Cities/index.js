import {useState, useEffect} from "react";
import {Divider} from "@mui/material";

const API_URL = 'https://front-11-project-default-rtdb.firebaseio.com';

export default function Cities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch (API_URL+'/cities.json')
      .then(response => response.json())
      .then(response => {
        let cities = [];

        for (let id in response) {
          cities.push(response[id]);
        }

        setData(cities);
      });
  }, [])


  return (
    <div>
      <h2>Pagina de Cidades</h2>

      <Divider/>

      <ul>
        {data.map(city => (
          <li>{city.name}</li>
        ))}
      </ul>
    </div>
  )
}
