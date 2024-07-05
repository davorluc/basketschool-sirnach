import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Verein from './pages/Verein';
import Geschichte from './pages/Verein/Geschichte';
import Vorstand from './pages/Verein/Vorstand';
import Trainer from './pages/Verein/Trainer';
import Hallen from './pages/Verein/Hallen';
import Neumitglied from './pages/Verein/Neumitglied';
import Layout from "./components/Layout";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="infos/" element={<Verein />} />
                    <Route path="infos/geschichte" element={<Geschichte />} />
                    <Route path="infos/vorstand" element={<Vorstand />} />
                    <Route path="infos/trainer" element={<Trainer />} />
                    <Route path="infos/hallen" element={<Hallen />} />
                    <Route path="infos/neumitglied" element={<Neumitglied />} />
                    <Route path="partners/" element={<Partners />} />
                    <Route path="kontakt/" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}