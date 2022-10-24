import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountryInformation from "./CountryInformation";
import { HiArrowNarrowLeft } from "react-icons/hi"
import ICountry from "assets/interfaces/ICountry";
import Loading from "assets/components/Loading";
import { loadingURL } from "assets/functions/loadingURL";
import styles from "./Country.module.scss";


const Country = () => {

    const { nameParams } = useParams()
    const [infoCountry, setInfoCountry] = useState<ICountry[]>([])

    useEffect(() => {
        loadingURL(`https://restcountries.com/v3.1/name/${nameParams}`, setInfoCountry);
    }, [])

    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <Link to={"/"} className={styles.btn__back}>
                    <HiArrowNarrowLeft />
                    Back
                </Link>

                {infoCountry.length > 0
                    ? <CountryInformation nation={infoCountry[0]} />
                    : <Loading />
                }
            </div>

        </main >
    );
}

export default Country;

