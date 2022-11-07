# SEARCH COUNTRIES APP

## 🎓 Objetivos 

O projeto foi desenvolvido com a proposta de praticar REACT e Requisição na API, realizado desafio do site frontendmethor, objetivo é criar um site que faz consulta no e [REST Countries API](https://restcountries.com/) e retorna todos os países.

## Demonstração

[Veja uma demonstração](https://search-country-app.vercel.app/) do site.

## Tecnologias

**Esse projeto foi desenvolvido com as seguintes tecnologias:**

 - React-JS;
 - TypeScript;
- SCSS;

**Features**
 - React-Router-Dom;
- useState;
- useEffects;
- localStorage;

**Usuários devem ser capazes de:**

- Veja todos os países da API na página inicial;
- Pesquisar um país usando um input search;
- Filtrar países por região;
- Clique em um país para ver informações mais detalhadas em uma página separada;
- Alterne o esquema de cores entre o modo Light/Dark;


## 🖥️ Para dispositivos Móveis e Desktops.




**Tema Ligth/Dark**

Utilizei localStorage para armazenar os dados da variável  theme do site e por padrão vem Light. A lógica usada foi verificar se existe theme ativo no localStorage foi:

    const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
Caso ative o theme Dark a função **isActiveTheme** faz a verificação qual tema está ativo e adiciona no localStorage a `key: theme  e value: dark`.

        const [theme, setTheme] = useState({
        status: false,
        text: "Dark Mode",
    })

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

Toda vezes que acessar o site o useEffect verifica qual tema está ativo e exibe na tela as cores referentes ao tema:
  

    useEffect(() => {
        window.document.documentElement.setAttribute("data-theme", storedTheme);
    }, [storedTheme])

## 👨‍💻 Para Inicializar o projeto

Para iniciar o projeto você precisa ter o Node.js instalado no seu sistema operacional.

Ao fazer fork ou baixar o projeto de o comando para baixar as dependências:

    cd search-country-app

Instale as dependências usando o seguinte comando:

    npm init 
     ou  
    npm i

Executa o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo em seu navegador.

  

    npm start

A página será recarregada quando você fizer alterações.


## ☕ Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](https://github.com/anthonibs/search-country-app/blob/main/CONTRIBUTING.md) e leia como contribuir.


## ✅ Licença
Esse projeto está sob licença. Veja o arquivo [MIT](https://github.com/anthonibs/search-country-app/blob/main/LICENSE) para mais detalhes.
