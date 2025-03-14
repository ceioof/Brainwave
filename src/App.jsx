import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main className=" overflow-hidden">
            <Header />
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            <Footer />
        </main>
    );
};
export default App;
