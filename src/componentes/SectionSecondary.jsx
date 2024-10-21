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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iusto magnam beatae delectus architecto ipsam expedita cum amet enim harum?</p>
            </div>
            <div className={Styles.PrimaryCard}>
                <img src={CardTigers} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iusto magnam beatae delectus architecto ipsam expedita cum amet enim harum?</p>
            </div>
        </section>
    );
}

export default SectionSecondary;