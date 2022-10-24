import regions from "./option.json";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import css from "classnames";
import styles from "./Filter.module.scss";

interface IFilter {
    ordination: string
    setOrdination: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ ordination, setOrdination }: IFilter) => {

    const [isOpenSelection, setIsOpenSelection] = useState(false);
    const nameOrder = ordination && regions.find(option => option.value === ordination)?.name;
   
    return (
        <fieldset className={styles.control}>
            <button
                className={css({
                    [styles.select]: true,
                    [styles["select--active"]]: ordination !== ""
                })}
                onClick={() => setIsOpenSelection(!isOpenSelection)}
                onBlur={() => setIsOpenSelection(false)}
            >
                <div className={styles.group}>
                    <span>{nameOrder || "Filter by Region"}</span>
                    {isOpenSelection ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropup size={20} />}
                </div>

                <div className={css({
                    [styles.options]: true,
                    [styles["options--active"]]: isOpenSelection
                })}>

                    {regions.map(option => (
                        <div className={styles.option} key={option.value} onClick={() => setOrdination(option.value)}>
                            {option.name}
                        </div>
                    ))}
                </div>
            </button>
        </fieldset >
    )
}

export default Filter;