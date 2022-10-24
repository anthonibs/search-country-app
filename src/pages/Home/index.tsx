import Card from "assets/components/Card";
import Loading from "assets/components/Loading";
import FieldInput from "pages/Home/FieldInpunt";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import styles from "./Home.module.scss";

const Home = () => {

    const [countrys, setCountrys] = useState<any[]>([]);
    const [country, setCountry] = useState<string>("");
    const [ordenador, setOrdenador] = useState("");

    function carregaURL(url: string, opt?: any) {
        fetch(url, opt)
            .then(response => response.json())
            .then(data => {
                setCountrys(data);

            })
            .catch(erro => {
                console.log(erro);
            })
    }

    useEffect(() => {
        carregaURL("https://restcountries.com/v3.1/all");
    }, [ordenador])

    function testaBusca(title: string) {
        const regex = new RegExp(country, "i");
        return regex.test(title);
    }

    function listaDeNove() {
        if (country.length > 0) {
            return (countrys.filter(el => testaBusca(el.name.common)));
        }

        if (ordenador !== "") {
            return countrys.filter(mapa => mapa.region == ordenador)
        }


        const randomOrder = countrys.sort(() => Math.random() > .5 ? 1 : -1);
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
                    <Filter ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <div className={styles.wrapper}>
                    {listaDeNove().length > 0
                        ? listaDeNove()?.map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                        : <Loading />
                    }
                </div>
            </section>
        </main>
    );
};


export default Home;