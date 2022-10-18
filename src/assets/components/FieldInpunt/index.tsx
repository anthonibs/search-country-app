import styles from "./FieldInpunt.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";

interface IFieldInput {
    type?: string
    required?: boolean
    placeholder?: string
}


const FieldInput = ({ type = "text", required, placeholder }: IFieldInput) => {

    return (
        <fieldset className={styles.control}>
            <BiSearchAlt2 className={styles.icon} />
            <input
                type={type}
                required={required}
                placeholder={placeholder}
            />
        </fieldset>
    );
};

export default FieldInput;