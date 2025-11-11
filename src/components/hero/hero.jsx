import contentImage from './content.jpg'
import './hero.scss'

export default function Hero() {

    return <section className="hero" id="hero">


            <div className="hero__col hero__col--image">
                <img
                    className="hero__image"
                    src={contentImage}
                    alt="Lawyer reviewing documents"
                    loading="eager"
                    decoding="async"
                />
            </div>


        <div className="hero__col hero__col--content">

            <nav className="hero__nav" aria-label="Primary">
                <ul className="hero__nav-list">
                    <li><a href="#who">A-quien</a></li>
                    <li><a href="#process">Proceso</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#cases">Casos</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Сontacto</a></li>
                </ul>
            </nav>


            <div className="hero__intro">
                <p className="hero__kicker">Specialized Attorney</p>
                <p className="hero__name">Pelayo Gonzalez Hernandez</p>
            </div>


            <h1 className="hero__title">

                <span>Litigios <br/>
                Estafas </span> Forex y criptomonedas
            </h1>


            <p className="hero__desc">
                I help victims of investment scams resolve disputes and recover losses in the
                foreign exchange and digital assets markets.
            </p>


            <a className="hero__cta" href="#evaluate" role="button">Evaluate my case</a>
        </div>
    </section>

}