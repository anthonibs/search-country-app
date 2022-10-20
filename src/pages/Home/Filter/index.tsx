import styles from "./Filter.module.scss";
import regions from "./option.json";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import css from "classnames";

interface IFilter {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ ordenador, setOrdenador }: IFilter) => {

    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && regions.find(opcao => opcao.value === ordenador)?.name;

    return (
        <fieldset className={styles.control}>
            <div
                className={css({
                    [styles.select]: true
                })}
                onClick={() => setAberto(true)}
                onBlur={() => setAberto(false)}
            >
                <div className={styles.select__active}>
                    {nomeOrdenador || "Filter by Region"}
                    {aberto ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropup size={20} />}
                </div>

                <div className={css({
                    [styles.options]: true,
                    [styles["options--active"]]: aberto
                })}>
                    {regions.map(item => (
                        <div key={item.id} className={styles.option} onClick={() => setOrdenador(item.value)}>
                            {item.name}
                        </div>
                    ))
                    }
                </div>
            </div>

        </fieldset>
    )
}

export default Filter;