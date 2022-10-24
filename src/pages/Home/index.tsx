import Card from "assets/components/Card";
import Loading from "assets/components/Loading";
import { loadingURL } from "assets/functions/loadingURL";
import FieldInput from "pages/Home/FieldInpunt";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import styles from "./Home.module.scss";

const Home = () => {

    const [countries, setCountries] = useState<any[]>([]);
    const [country, setCountry] = useState<string>("");
    const [ordination, setOrdination] = useState("");

    useEffect(() => {
        loadingURL("https://restcountries.com/v3.1/all", setCountries);
    }, [ordination])

    function testSearch(title: string) {
        const regex = new RegExp(country, "i");
        return regex.test(title);
    }

    function newFilteredList() {
        if (country.length > 0) {
            return (countries.filter(country => testSearch(country.name.common)));
        }

        if (ordination !== "") {
            return countries.filter(filter => filter.region == ordination)
        }

        const randomOrder = countries.sort(() => Math.random() > .5 ? 1 : -1);
        const spliceCountry = randomOrder.slice(0, 9);

        return spliceCountry
    }

    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <div className={styles.group}>
                    <FieldInput
                        type="search"
                        placeholder="Search for a country..."
                        value={country}
                        onChange={setCountry}

                    />
                    <Filter ordination={ordination} setOrdination={setOrdination} />
                </div>
                <div className={styles.wrapper}>
                    {newFilteredList().length > 0
                        ? newFilteredList()?.map(country => (
                            <Card key={country.name.common} country={country} />
                        ))
                        : <Loading />
                    }
                </div>
            </section>
        </main>
    );
};


export default Home;