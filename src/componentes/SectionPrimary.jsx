import Styles from '../styles/SectionPrimary.module.css';
import Image from '../assets/ambiente-private.jpg'; 

function SectionPrimary() {

    return (
        <div className={Styles.ContainerSectionPrimary}>
            <div className={Styles.DescriptionSectionPrimary}>
                <p>O Poder de Um Império Financeiro ao Seu Alcance</p>
            </div>
            <div className={Styles.ContainerButtonSectionPrimary}>
                <button>Abrir conta</button>
                <button>Ver produtos</button>
            </div>
                <img src={Image} alt="Imagem" />
        </div>
    );
}

export default SectionPrimary;