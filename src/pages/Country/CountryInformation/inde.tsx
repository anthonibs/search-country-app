import styles from "./CountryInformation.module.scss";

const CountryInformation = ({ nation }: any) => {

    const { name, flags, population, capital, region, subregion, tld, currencies, languages, borders } = nation

    const nativeName = name.nativeName[Object.keys(name.nativeName)[0]].common;
    const lang = languages[Object.keys(languages)[0]]
    const currency = Object.keys(currencies)


    return (
        <article className={styles.container}>
            <picture className={styles.container__image}>
                <img src={flags.png} />
            </picture>

            <div className={styles.container__description}>
                <h2 className={styles.title}>{name.common}</h2>

                <ul className={styles.list__first}>
                    <li>Native Name: <span>{nativeName}</span></li>
                    <li>Population: <span>{Intl.NumberFormat("BR").format(population)}</span></li>
                    <li>Region: <span>{region}</span></li>
                    <li>Sub Region: <span>{subregion}</span></li>
                    <li>Capital: <span>{capital}</span></li>
                </ul>

                <ul className={styles.list__second}>
                    <li>Top Level Domain: <span>{tld}</span></li>
                    <li>Currencies: <span>{currency}</span></li>
                    <li>Languagens: <span>{lang}</span></li>
                </ul>

                <div className={styles.tags}>
                    <h3>Border Countries: </h3>

                    {borders == undefined ? "" : borders.map((frontier: any) =>
                        <span
                            key={frontier}
                            className={styles.tag}
                        >
                            {frontier}
                        </span>
                    )}

                </div>
            </div>
        </article>
    );
}


export default CountryInformation;
