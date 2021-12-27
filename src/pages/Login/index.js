import "bootstrap/dist/css/bootstrap.min.css";

function Input ({type, label}) {
  return (
    <>
      <label>{label}</label>
      <input className="form-control mb-2" type={type} placeholder={label}/>
    </>
  )
}



export default function Login() {
  return (
    <div>
        <Input type="email" label="Email"/>
        <Input type="password" label="Senha"/>

        <Input type="text" label="Nome"/>

      <button className="btn btn-primary">Entrar</button>
    </div>
  )
}
