
import styles from "./Card.module.scss";



const Card = (props: any) => {
    return (
        <article className={styles.card}>
            <picture className={styles.card__image}>
                <img src={props.country.flags.png} alt="Bandeira do Brasil" />
            </picture>
            <div className={styles.card__description}>
                <h2 className={styles.title}>{props.country.name.common}</h2>
                <p className={styles.subtitle}>Population: <span className={styles.info}>{props.country.population}</span></p>
                <p className={styles.subtitle}>Region: <span className={styles.info}>{props.country.region}</span></p>
                <p className={styles.subtitle}>Capital: <span className={styles.info}>{props.country.capital}</span></p>
            </div>
        </article>
    );

};

export default Card;