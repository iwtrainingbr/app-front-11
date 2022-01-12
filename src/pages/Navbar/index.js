import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar () {
    return (
    <ul className={styles.list}>
        <li className={styles.item}>
            <Link to="/">Inicio</Link>
        </li>
        <li className={styles.item}>
            <Link to="/login">Login</Link>
        </li>
        <li className={styles.item}>
            <Link to="/config">Configuração </Link>
        </li>
        <li className={styles.item}>
            <Link to="/listar">Listar</Link>
        </li>
        <li className={styles.item}>
            <Link to="/exemplo">Exemplo</Link>
        </li>
    </ul>
    )
}

export default Navbar
