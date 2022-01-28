export default function Teste () {
  const acao = () => {
    alert('teste');
  }

  return (
    <div>
      <h1>Teste</h1>

        <Botoes action={acao}/>
    </div>
  );
}

function Botoes (props) {
  return (
    <div>
      <MeuComponente action={props.action} color="red" label="Cadastro"/>
      <MeuComponente action={props.action} color="blue" label="Listar"/>
    </div>
  )
}


function MeuComponente (props) {
  return (
    <button onClick={props.action} style={{backgroundColor: props.color}}>
      {props.label}
    </button>
  )
}
