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
            <button
                className={css({
                    [styles.select]: true,
                    [styles["select--ativo"]]: ordenador !== ""
                })}
                onClick={() => setAberto(!aberto)}
                onBlur={() => setAberto(false)}
            >
                <div className={styles.group}>
                    <span>{nomeOrdenador || "Filter by Region"}</span>
                    {aberto ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropup size={20} />}
                </div>

                <div className={css({
                    [styles.options]: true,
                    [styles["options--active"]]: aberto
                })}>

                    {regions.map(opcao => (
                        <div className={styles.option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
                            {opcao.name}
                        </div>
                    ))}
                </div>
            </button>
        </fieldset >
    )
}

export default Filter;