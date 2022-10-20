import styles from "./FieldInpunt.module.scss";
import { BiSearchAlt2 } from "react-icons/bi";

interface IFieldInput {
    type?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}


const FieldInput = ({ type = "text", required, placeholder, value, onChange }: IFieldInput) => {


    return (
        <fieldset className={styles.control}>
            <BiSearchAlt2 className={styles.icon} />
            <input
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        </fieldset>
    );
};

export default FieldInput;