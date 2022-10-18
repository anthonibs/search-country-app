import ICountry from "interfaces/ICountry";
import styles from "./Card.module.scss";



const Card = ({ country }: ICountry) => {

    const { name, capital, region, flags, population } = country;

    return (
        <article className={styles.card}>
            <picture className={styles.card__image}>
                <img src={flags.png} alt="Bandeira do Brasil" />
            </picture>
            <div className={styles.card__description}>
                <h2 className={styles.title}>{name.common}</h2>
                <p className={styles.subtitle}>Population: <span className={styles.info}>{population}</span></p>
                <p className={styles.subtitle}>Region: <span className={styles.info}>{region}</span></p>
                <p className={styles.subtitle}>Capital: <span className={styles.info}>{capital}</span></p>
            </div>
        </article>
    );

};

export default Card;