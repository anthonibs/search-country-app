import Card from "assets/components/Card";
import FieldInput from "assets/components/FieldInpunt";
import ICountry from "interfaces/ICountry";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";


const Home = () => {

    const [countrys, setCountrys] = useState<any[]>([]);

    useEffect(() => {
        loadCountry();
    }, []);

    async function loadCountry() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            if (!response.ok) {
                throw Error("Ocorreu um erro no servidor.");
            }
            const ordemAleatoria = data.sort(() => (Math.random() > .5 ? 1 : -1));

            return setCountrys(ordemAleatoria.slice(0, 8));

        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro de conexão ao servidor.");
        }

    }

    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <div className={styles.group}>
                    <FieldInput
                        type="search"
                        placeholder="Search for a country..."
                    />
                </div>
                <div className={styles.wrapper}>
                    {countrys.map((country, index) => (
                        <Card key={index} country={country} />
                    ))}
                </div>
            </section>
        </main>
    );
};


export default Home;