import React, { useEffect, useState } from 'react';
import Styles from '../styles/SectionPrimary.module.css';
import CardTigers from '../assets/tigerscard.png';
import Capatigerscard from '../assets/capa-tigers-card.png';
import CardGreen from '../assets/cardgreen.jpg';

function SectionPrimary() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scaleTop = Math.max(1 - scrollY / 500, 0.5);
    const scaleBottom = Math.min(1 + scrollY / 500, 1.5);

    return (
        <div className={Styles.ContainerSectionPrimary}>
            <div className={Styles.ContainerContent} style={{ transform: `scale(${scaleTop})` }}>
                <img className={Styles.Card} src={CardTigers} alt="Cartão Tigers" />
                <h1 className={`${Styles.TitleSectionPrimary} ${Styles.kanitregulart}`}>Não oferecemos apenas serviços</h1>
            </div>

            <div className={Styles.ContainerContent} style={{ transform: `scale(${scaleBottom})` }}>
                <h1 className={`${Styles.TitleSectionPrimaryTwo} ${Styles.kanitregulart}`}>Oferecemos uma experiência única</h1>
                <img className={Styles.CapaCard} src={Capatigerscard} alt="Imagem Card" />
            </div>
            <div id="sobre" className={Styles.ContainerContentSobre} style={{ transform: `scale(${scaleBottom})` }}>
                <h1 className={`${Styles.TitleSectionPrimaryTwo} ${Styles.kanitregulart}`}>Sobre a Tigers</h1>
                
                <div className={Styles.ContentTextSobre}>
                    <div className={Styles.ContextText}>
                        <p>A Tigers Pay nasceu com a missão de revolucionar o setor financeiro, oferecendo uma experiência digital simples, ágil e acessível. Como uma fintech independente, a Tigers Pay foi criada para atender às necessidades de clientes que valorizam eficiência e inovação em suas transações diárias.</p>
                        <a>Ver mais</a>
                    </div>
                        <img className={Styles.CapaCard} src={CardGreen} alt="Imagem Card" />
                </div>
            </div>
        </div>
    );
}

export default SectionPrimary;