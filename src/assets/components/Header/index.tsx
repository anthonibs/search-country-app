import { useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import styles from "./Header.module.scss";

interface IProps {
    title?: string,
}


const Header = ({ title }: IProps) => {

    const [theme, setTheme] = useState({
        status: false,
        text: "Dark Mode"
    })

    function isActiveTheme() {
        if (theme.status) {
            setTheme({ status: false, text: "Dark Mode" })
        }

        if (theme.status === false) {
            setTheme({ status: true, text: "Light Mode" })
        }
    }
  

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <button
                    className={styles.btn__theme}
                    onClick={isActiveTheme}
                >
                    <div className={styles.container__group}>
                        {theme.status !== true ? <BsMoonStarsFill size={18} /> : <BsSunFill size={18} />}
                        <p className={styles.theme__mode}>
                            {theme.text}
                        </p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;