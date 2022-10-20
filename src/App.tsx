import Header from "assets/components/Header";
import Country from "pages/Country";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

    return (
        <>
            <Header title="Where in the world?" />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="country" element={<Country />} />
                    <Route path="country/:nameParams" element={<Country />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;