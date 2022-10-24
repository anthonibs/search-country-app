// import { INation } from "interfaces/INation";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Country.module.scss";
import CountryInformation from "./CountryInformation";
import { HiArrowNarrowLeft } from "react-icons/hi"
import ICountry from "interfaces/ICountry";
import Loading from "assets/components/Loading";


const Country = () => {

    const navigate = useNavigate();
    const { nameParams } = useParams()

    const [info, setInfo] = useState<ICountry[]>([])


    function carregaURL(url: string) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
            })
            .catch(erro => {
                console.log(erro);
            })
    }


    useEffect(() => {
        carregaURL(`https://restcountries.com/v3.1/name/${nameParams}`);
    }, [])




    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <Link to={"/"} className={styles.btn__back}>
                    <HiArrowNarrowLeft />
                    Back
                </Link>

                {info.length > 0
                    ? <CountryInformation nation={info[0]} />
                    : <Loading />
                }
            </div>

        </main >
    );
}

export default Country;

