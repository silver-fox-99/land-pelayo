import './about.scss'
import aboutImage from './about.jpg'

export default function About() {

    return <section className="about" id="about">
        <div className="about__inner container">
            <div className="about__content">
                <h2 className="about__title">SOBRE MÍ</h2>

                <div className="about__text">
                    <p>
                        Soy un abogado que se dedica a casos relacionados con disputas monetarias, estafas con
                        criptomonedas y
                        diferentes tipos de fraudes en línea. Asesoro a personas que desean recuperar el dinero perdido
                        como
                        consecuencia de fraudes y estafas.
                    </p>
                    <p>
                        La posibilidad de comunicarme con mis clientes en su idioma materno me ayuda a comprender mejor
                        los
                        problemas específicos y a llevar los casos de manera más eficaz. Si ha sido víctima de un
                        fraude,
                        póngase en contacto conmigo y le ayudaré a recuperar su dinero.
                    </p>
                </div>
            </div>

            <figure className="about__media">
                <div className="about__media-frame">
                    <img
                        className="about__img"
                        src={aboutImage}
                        alt="Retrato del abogado frente a la bandera de España"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </figure>
        </div>
    </section>

}