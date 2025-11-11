import wrapImage from './wrap.svg'
import './benefits.scss'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'

export function Benefits() {
    return (
        <section className="benefits" id="benefits">
            <div className="container">
                <div className="benefits__inner">
                    <h2 className="benefits__title">
                        VENTAJAS <span className="benefits__title-accent">DE TRABAJAR CONMIGO</span>
                    </h2>

                    <p className="benefits__lead">
                        Ofrezco asistencia experta en la protección de los derechos e intereses de los clientes
                        que han sido víctimas de fraude o mala conducta en los mercados financieros y las bolsas
                        de criptomonedas. Mi trabajo consiste en recuperar los fondos perdidos y proporcionar
                        defensa jurídica.
                    </p>

                    <ul className="benefits__grid">
                        <li className="benefits__card">
                            <div className="benefits__icon" aria-hidden="true">
                                <img src={icon1} alt=""/>
                                <h3 className="benefits__card-title">SENCILLO</h3>

                            </div>
                            <p className="benefits__card-text">
                                Solo necesito conocer los detalles y nos pondremos manos a la obra.
                            </p>
                        </li>

                        <li className="benefits__card">
                            <div className="benefits__icon" aria-hidden="true">
                                <img src={icon2} alt=""/>
                                <h3 className="benefits__card-title">RÁPIDO</h3>

                            </div>
                            <p className="benefits__card-text">
                                Me pondré en contacto con usted tan pronto como sea posible.
                            </p>
                        </li>

                        <li className="benefits__card">
                            <div className="benefits__icon" aria-hidden="true">
                                <img src={icon3} alt=""/>
                                <h3 className="benefits__card-title">ONLINE</h3>

                            </div>
                            <p className="benefits__card-text">
                                Si la ley no requiere su presencia, yo me encargaré de todas las asuntos.
                            </p>
                        </li>

                        <li className="benefits__card">
                            <div className="benefits__icon" aria-hidden="true">
                                <img src={icon4} alt=""/>
                                <h3 className="benefits__card-title">ASEQUIBLE</h3>

                            </div>
                            <p className="benefits__card-text">
                                Ofrezco los precios más competitivos con la más alta calidad de servicios.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="benefits__image">
                    <img src={wrapImage} alt=""/>
                </div>
            </div>

        </section>
    );
}
