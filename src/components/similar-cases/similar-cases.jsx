import './similar-cases.scss'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import icon5 from './icon5.svg'
import icon6 from './icon6.svg'

export default function SimilarCases() {
    return <section className="similar-cases container" id="similar-cases">

            <h2 className="similar-cases__title">
                ¿QUIZÁS TUVISTE UNA <span className="similar-cases__title-accent">SITUACIÓN SIMILAR?</span>
            </h2>

            <ul className="similar-cases__list">
                <li className="similar-cases__item">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon1} alt=""/>
                        <div className="similar-cases__num">01</div>
                    </div>

                    <p className="similar-cases__text">
                        ¿Ha tenido pérdidas financieras debido a inversiones no autorizadas y de alto riesgo realizadas
                        a través de un corredor no regulado?
                    </p>
                </li>

                <li className="similar-cases__item ">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon2} alt=""/>
                        <div className="similar-cases__num">02</div>
                    </div>

                    <p className="similar-cases__text">
                        ¿Ha tenido dificultades para retirar parte o la totalidad de su capital invertido a pesar de
                        haber solicitado repetidamente el retiro?
                    </p>
                </li>


                <li className="similar-cases__item">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon3} alt=""/>
                        <div className="similar-cases__num">03</div>
                    </div>

                    <p className="similar-cases__text">
                        ¿Ha llegado a la conclusión de que sus operaciones comerciales están suspendidas o no
                        controladas por las autoridades financieras competentes?
                    </p>
                </li>


                <li className="similar-cases__item">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon4} alt=""/>
                        <div className="similar-cases__num">04</div>
                    </div>

                    <p className="similar-cases__text">
                        ¿Tiene dificultades para acceder a su depósito, ganancias o extracto de sus transacciones?
                    </p>
                </li>


                <li className="similar-cases__item">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon5} alt=""/>
                        <div className="similar-cases__num">05</div>

                    </div>
                    <p className="similar-cases__text">
                        ¿Ha recibido ofertas sospechosas relacionadas con Cuentas Premium o Bonos de Inversión?
                    </p>
                </li>


                <li className="similar-cases__item">
                    <div className="similar-cases__icon" aria-hidden="true">
                        <img src={icon6} alt=""/>
                        <div className="similar-cases__num">06</div>

                    </div>
                    <p className="similar-cases__text">
                        Otras preguntas relacionadas con fraudes y problemas en el mercado Forex
                    </p>
                </li>
            </ul>
    </section>

}