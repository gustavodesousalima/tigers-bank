import Styles from '../styles/SectionSecondary.module.css';
import CaseCard from '../assets/case-card.png';
import CardTigers from '../assets/tigerscard.png';
import Personalite from '../assets/personalite.jpg';
import Personcardaviation from '../assets/personcardaviation.jpg';
import Cardgreen from '../assets/cardgreen.jpg';

function SectionSecondary(){
    return(
        <section className={Styles.sectionSecondary}>
            <div className={Styles.ContainerPersonalite}>
            <div className={Styles.PrimaryCard}>
                <img src={Personcardaviation} alt="" />
            </div>
            <div className={Styles.PrimaryCard}>
                <img src={Personalite} alt="" />
            </div>
            <div className={Styles.PrimaryCard}>
                <img src={Cardgreen} alt="" />
            </div>
            </div>
            <h2>Personalite Card</h2>
            <div className={Styles.PrimaryCard}>
                <img src={CaseCard} alt="" />
                <p>Elegância e proteção em um só lugar. Nossa case de luxo é feita com materiais premium, proporcionando segurança e estilo ao guardar seu cartão. Um acessório exclusivo para quem valoriza sofisticação em cada detalhe.</p>
            </div>
            <div className={Styles.PrimaryCard}>
                <img src={CardTigers} alt="" />
                <p>O Cartão Gold Tigers Bank oferece acesso exclusivo a um mundo de benefícios. Com design refinado e limites diferenciados, é o símbolo do poder e da liberdade financeira que você merece.</p>
            </div>
        </section>
    );
}

export default SectionSecondary;