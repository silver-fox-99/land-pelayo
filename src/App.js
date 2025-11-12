import Hero from "./components/hero/hero";
import KeyMetrics from "./components/key-metrics/key-metrics";
import SimilarCases from "./components/similar-cases/similar-cases";
import {Benefits} from "./components/benefits/benefits";
import {Services} from "./components/services/services";
import Situations from "./components/situations/situations";
import About from "./components/about/about";
import Differentiators from "./components/differentiators/differentiators";
import Testimonials from "./components/testimonials/testimonials";
import {ContactForm} from "./components/contact-form/contact-form";
import {Faq} from "./components/faq/faq";
import {Footer} from "./components/footer/footer";
import {Header} from "./components/header/header";

function App() {
  return (
    <>
        <Header />
        <Hero />
        <KeyMetrics />
        <SimilarCases />
        <Benefits />
        <Services />
        <Situations />
        <About />
        <Differentiators />
        <Testimonials />
        <ContactForm />
        <Faq />
        <Footer />
    </>
  );
}

export default App;
