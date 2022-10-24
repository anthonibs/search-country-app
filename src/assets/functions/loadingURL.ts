import ICountry from "assets/interfaces/ICountry";

export function loadingURL(url: string, setCustom: React.Dispatch<React.SetStateAction<ICountry[]>>): void {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setCustom(data);
        })
        .catch(erro => {
            console.log(erro);
        })
}