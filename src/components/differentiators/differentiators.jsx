import bgIcon from './bg.svg'
import img from './img.png'
import './differentiators.scss'
export default function Differentiators() {
    return (
        <section className="differentiators" id="differentiators">
            <div className="differentiators__inner container">

                <div className="differentiators__header">
                    <h2 className="differentiators__title">
                        LO QUE ME DIFERENCIA<br />
                        <span className="differentiators__title-accent">DE LOS DEMÁS</span>
                    </h2>
                    <p className="differentiators__subtitle">
                        La seguridad financiera es mayor importancia actualmente en el mundo digital,
                        y el volumen de fraude de protección contra el fraude digital sigue en aumento.
                    </p>
                </div>

                <div className="differentiators__layout">

                    <figure className="differentiators__media">
                        <div className="differentiators__media-frame">
                            <img
                                className="differentiators__img"
                                src={img}
                                alt="Retrato del abogado en la oficina"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </figure>


                    <div className="differentiators__content">
                        <section className="differentiators__block">
                            <h3 className="differentiators__block-title">
                                Conocimiento multifacético de las amenazas:
                            </h3>
                            <p className="differentiators__text">
                                Tengo un profundo conocimiento de los diferentes tipos de fraudes y esquemas, incluidas las
                                estafas con criptomonedas, inversiones y brókers no regulados. Mi experiencia me permite analizar
                                los casos y ayudar a las víctimas a entender exactamente en qué paso se perdió el dinero.
                            </p>
                        </section>

                        <section className="differentiators__block">
                            <h3 className="differentiators__block-title">Respuesta a incidentes:</h3>
                            <p className="differentiators__text">
                                Entiendo que perder dinero es un golpe crucial. Proporciono orientación y apoyo (en español) desde
                                los primeros pasos del proceso, lo que nos permite mantener el ánimo y desarrollar la mejor
                                estrategia de los objetivos.
                            </p>
                        </section>

                        <section className="differentiators__block">
                            <h3 className="differentiators__highlight">
                                UNA NUEVA ERA DE<br />
                                <span className="differentiators__highlight-accent">SERVICIOS LEGALES</span>
                            </h3>
                            <p className="differentiators__text">
                                Mi enfoque se integra con procesos y con la protección contra el fraude digital, combinando conocimiento
                                práctico y herramientas modernas. Trabajo directamente con los detalles de cada caso, me comunico
                                personalmente y mantengo la transparencia en todas las etapas.
                            </p>
                            <p className="differentiators__text">
                                No importa si su caso está relacionado con un bróker, una plataforma de inversión o una estafa
                                de las criptomonedas: mi objetivo es ayudarle a recuperar su dinero.
                            </p>
                        </section>
                    </div>
                </div>


                <div className="differentiators__ornament" aria-hidden="true">
                    <img src={bgIcon} alt=""/>
                </div>
            </div>
        </section>
    );
}
