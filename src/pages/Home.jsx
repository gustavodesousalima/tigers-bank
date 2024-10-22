import SectionPrimary from "../componentes/SectionPrimary";
import Styles from './Home.module.css';

function Home(){
    return(
        <main className={Styles.ContainerHome}>
        <SectionPrimary />
        </main>
    )
}

export default Home;