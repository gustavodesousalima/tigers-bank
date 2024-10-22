import Styles from '../styles/Card.module.css';

function Card({img, texto }){
    return(
        <div className={Styles.ContainerPrincipalGoldEX}>
            <div className={Styles.ContainerCardGoldEx}>
                <img src={img} alt="Imagem cartão" />
                <h1>{texto}</h1>
            </div>
            <button className={Styles.ButtonEuquero}>Eu quero</button>
        </div>
    )
}

export default Card;