import Card from "assets/components/Card";
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
            const dividir = data.slice(1, 11);
            return setCountrys(dividir);

        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro de conexão ao servidor.");
        }

    }

    return (
        <main className={styles.container}>
            <section className={styles.wrapper}>
                {countrys.map((country, index) => (
                    <Card key={index} country={country} />
                ))}
            </section>
        </main>
    );
};


export default Home;