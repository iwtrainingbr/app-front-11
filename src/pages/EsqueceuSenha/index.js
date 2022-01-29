import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./style.css";

export default function EsqueceuSenha() {
    const mudarSenha = () => {
        alert('Algumas instruções para a criação de uma nova senha foram enviadas ao seu email');
    }

    return (
        <main>
            <h1>Equecei minha Senha</h1>
            <div className='recuperar'>
                <h3>Informe o mesmo email que você usou quando você cadastrou para trocar sua senha.</h3>
                <TextField data-cy="email" color="error" fullWidth label="Email" variant="outlined"/>
                <br/><br/>
                <Button data-cy="enviar" fullWidth color="info" size="large" variant="contained" onClick={mudarSenha}>Recuperar Senha</Button>
            </div>
        
        </main>
    )
}