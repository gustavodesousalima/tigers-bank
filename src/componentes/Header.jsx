import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from '../styles/Header.module.css';
import LogoTigers from '../assets/Tigers_Pay.png';

function Header() {
    const navigate = useNavigate();

    const handleSobreClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const sobreSection = document.getElementById('sobre');
            if (sobreSection) {
                sobreSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };

    return (
        <header className={Styles.header}>
            <img className={Styles.Logo} src={LogoTigers} alt="Logo Tigers Bank" />

            <nav>
                <Link to="/"><a className={Styles.kanitmedium}>Home</a></Link>
                <Link><a className={Styles.kanitmedium} href="#sobre" onClick={handleSobreClick}>Sobre a Tigers</a></Link>
                <Link to="/goldex"><a className={Styles.kanitmedium}>GoldEX</a></Link>
            </nav>

            <div className={Styles.ContainerButton}>
                <button className={Styles.kanitmedium}>Entrar</button>
                <button className={Styles.kanitmedium}>Cadastre-se</button>
            </div>
        </header>
    );
}

export default Header;