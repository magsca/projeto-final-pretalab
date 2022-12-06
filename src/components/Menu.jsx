import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'
export function Menu() {
    return(
        <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>  {/*são criadas classes para estilizar, então tudo que for li vai repetir a classe pra menter o stilo*/}
            <Link className={styles.menuLink} to="/">Inicio</Link>
        </li>

        <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/sobre">Sobre</Link>
        </li>

        <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/portfolio">Portfolio</Link>
        </li>

        <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/contato ">Contato</Link>
        </li>

        <li>
            <Link to=""></Link>
        </li>

        </ul>
    )
}