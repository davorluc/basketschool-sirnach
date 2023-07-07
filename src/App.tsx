import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
// import About from './pages/About';
// import News from './pages/News';
// import Info from './pages/Info';
import Teams from './pages/Teams';
// import Contact from './pages/Contact';
import Verein from './pages/Verein';
import Geschichte from './pages/Verein/Geschichte';
import Vorstand from './pages/Verein/Vorstand';
import Trainer from './pages/Verein/Trainer';
import Hallen from './pages/Verein/Hallen';
import Neumitglied from './pages/Verein/Neumitglied';
import DamenU14 from "./pages/Teams/DamenU14";
import Herren3 from "./pages/Teams/Herren3Liga";
import Herren4 from "./pages/Teams/Herren4Liga";
import HerrenU14 from "./pages/Teams/HerrenU14";
import HerrenU16 from "./pages/Teams/HerrenU16";
import HerrenU18 from "./pages/Teams/HerrenU18";
import Layout from "./components/Layout";
import MixU10 from "./pages/Teams/MixU10";
import MixU12 from "./pages/Teams/MixU12";
import Shop from "./pages/Shop";
import Partners from "./pages/Partners";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/*<Route path="about/" element={<About />} />*/}
                    {/*<Route path="news/" element={<News />} />*/}
                    {/*<Route path="info/" element={<Info />} />*/}
                    {/*<Route path="teams/" element={<Teams />} />*/}
                    {/*<Route path="contact/" element={<Contact />} />*/}
                    <Route path="verein/" element={<Verein />} />
                    <Route path="verein/geschichte" element={<Geschichte />} />
                    <Route path="verein/vorstand" element={<Vorstand />} />
                    <Route path="verein/trainer" element={<Trainer />} />
                    <Route path="verein/hallen" element={<Hallen />} />
                    <Route path="verein/neumitglied" element={<Neumitglied />} />
                    <Route path="teams/" element={<Teams />} />
                    <Route path="teams/mixu10" element={<MixU10 />} />
                    <Route path="teams/mixu12" element={<MixU12 />} />
                    <Route path="teams/damenu14" element={<DamenU14 />} />
                    <Route path="teams/herrenu14" element={<HerrenU14 />} />
                    <Route path="teams/herrenu16" element={<HerrenU16 />} />
                    <Route path="teams/herrenu18" element={<HerrenU18 />} />
                    <Route path="teams/herren3" element={<Herren3 />} />
                    <Route path="teams/herren4" element={<Herren4 />} />
                    <Route path="shop/" element={<Shop />} />
                    <Route path="partners/" element={<Partners />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}