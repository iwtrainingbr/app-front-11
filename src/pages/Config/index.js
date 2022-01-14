import Switch from '@mui/material/Switch';


export default function Config() {
  const mudarCor = () => {
    alert('alterando');
  }

  return (
    <div>
      <Switch onChange={mudarCor}/>
      Modo Escuro
      <br></br>
      <Switch/>
      Modo Claro

    </div>
  )
}
