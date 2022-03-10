import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import axios from "axios";
import RecipieSection from "./components/main/RecipieSection";
import MainCarousel from "./components/carousel/MainCarousel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RecipePage from "./components/recipe/RecipePage";
import ContactPage from "./components/contact/ContactPage";
function App() {
    const API_ID = "0661c982";
    const APP_KEY = "7353eea85e119f573dcc74978387b3b0";
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=${API_ID}&app_key=${APP_KEY}`;

    const [recipies, setRecipies] = useState({});

    const getRecipies = async () => {
        const data = await axios.get(url);
        setRecipies(data.data);
    };
    useEffect(() => {
        getRecipies();
    }, []);
    return (
        <Router>
            <div className="App">
                <Header />
                {/* <MainCarousel /> */}
                <Routes>
                    <Route
                        path="/"
                        element={recipies.hits && <RecipieSection recipies={recipies.hits} />}></Route>
                    <Route path="/login-form" element={<LoginForm />} />
                    <Route path="/recipe-page" element={<RecipePage />} />
                    <Route path="/contact-form" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
