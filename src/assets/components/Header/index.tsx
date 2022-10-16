import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import styles from "./Header.module.scss";

interface IProps {
    title: string,
}


const Header = ({ title }: IProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <button className={styles.btn__theme}>
                    <div className={styles.container__group}>
                        <BsMoonStarsFill size={18} />
                        <p className={styles.theme__mode}>Dark Mode</p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;