import Hero from "./components/hero/hero";
import KeyMetrics from "./components/key-metrics/key-metrics";
import SimilarCases from "./components/similar-cases/similar-cases";
import {Benefits} from "./components/benefits/benefits";
import {Services} from "./components/services/services";
import Situations from "./components/situations/situations";
import About from "./components/about/about";
import Differentiators from "./components/differentiators/differentiators";
import Testimonials from "./components/testimonials/testimonials";

function App() {
  return (
    <>
        <Hero />
        <KeyMetrics />
        <SimilarCases />
        <Benefits />
        <Services />
        <Situations />
        <About />
        <Differentiators />
        <Testimonials />
    </>
  );
}

export default App;
