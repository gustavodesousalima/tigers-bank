import Styles from '../styles/Header.module.css';
import LogoTigers from '../assets/tigers-bank.png';

function Header(){
    return(
        <header className={Styles.header}>
            <img className={Styles.Logo} src={LogoTigers} alt="Logo Tigers Bank" />

            <nav>
                <a href="">Home</a>
                <a href="">Sobre a Tigers</a>
                <a href="">Investimentos</a>
                <a href="">Cartões</a>
            </nav>
        </header>
    )
}

export default Header;