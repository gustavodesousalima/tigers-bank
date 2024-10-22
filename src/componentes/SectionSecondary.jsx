import Styles from '../styles/SectionSecondary.module.css';
import CardTigers from '../assets/tigerscard.png';
import Card from '../componentes/Card';


function SectionSecondary(){
    return(
        <section className={Styles.sectionSecondary}>
           <div className={Styles.ContainerCartao}>
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />
                
           </div>
           <div className={Styles.ContainerCartao}>
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />
                <Card 
                    img={CardTigers}
                    texto="GoldEX"
                />

           </div>
        </section>
    );
}

export default SectionSecondary;