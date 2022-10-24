import styles from "./Loading.module.scss";
import css from "classnames";

function Loading() {
    return (
        <div className={css({
            [styles.loader]: true
        })}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="320"
                height="100"
                x="0"
                y="0"
                enableBackground="new 0 0 50 50"
                version="1.1"
                viewBox="0 0 24 30"
                xmlSpace="preserve"
            >
                <path fill="#333" d="M0 10H4V20H0z" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="0.2; 1; .2"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 20; 10"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 5; 10"
                    ></animate>
                </path>
                <path fill="#333" d="M8 10H12V20H8z" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="0.2; 1; .2"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 20; 10"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 5; 10"
                    ></animate>
                </path>
                <path fill="#333" d="M16 10H20V20H16z" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="0.2; 1; .2"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 20; 10"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="10; 5; 10"
                    ></animate>
                </path>
            </svg>
        </div>
    );
}

export default Loading;