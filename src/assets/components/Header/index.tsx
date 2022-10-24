import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import styles from "./Header.module.scss";

interface IProps {
    title?: string,
}


const Header = ({ title }: IProps) => {
    const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const [theme, setTheme] = useState({
        status: false,
        text: "Dark Mode",
    })
    console.log(theme);
    // console.log(theme.mode);

    function isActiveTheme() {

        if (theme.status === false) {
            setTheme({ status: true, text: "Light Mode" })
            localStorage.setItem("theme", "dark");
        }

        if (theme.status) {
            setTheme({ status: false, text: "Dark Mode" })
            localStorage.setItem("theme", "light");
        }

    }

    useEffect(() => {
        window.document.documentElement.setAttribute("data-theme", storedTheme);
    }, [storedTheme])

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