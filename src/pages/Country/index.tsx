// import { INation } from "interfaces/INation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Country.module.scss";
import CountryInformation from "./CountryInformation/inde";
import { HiArrowNarrowLeft } from "react-icons/hi"


const Country = () => {

    const navigate = useNavigate();
    const { nameParams } = useParams()

    const [info, setInfo] = useState<any[]>([])



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


    function handleClick() {
        navigate(-1)
    }


    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <button
                    className={styles.btn__back}
                    onClick={handleClick}
                >
                    <HiArrowNarrowLeft />
                    Back
                </button>

                {info.length > 0
                    ? <CountryInformation nation={info[0]} />
                    : <h2 className={styles.message}>
                        Loading countries
                        <span>.</span>
                        <span className={styles.laoding}>.</span>
                        <span>.</span>
                    </h2>
                }
            </div>

        </main >
    );
}

export default Country;
