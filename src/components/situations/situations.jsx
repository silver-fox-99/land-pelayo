import './situations.scss'
import itemIcon from './icon.svg'

export default function Situations() {
    return <section className="situations" id="situations">
        <div className="situations__inner container">
                <div className="situations__left">
                    <h2 className="situations__title">
                        ¿HA TENIDO<br/>
                        ALGUNA DE LAS<br/>
                        <span className="situations__title-accent">SIGUIENTES<br/>SITUACIONES?</span>
                    </h2>
                </div>

                <div className="situations__right">
                    <ul className="situations__list">
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              Fraude de un bróker: le han prometido grandes ganancias que nunca se materializaron
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿Le han ofrecido bonos o incentivos para complementar su salario?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿Tiene dificultades para acceder a su depósito?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿No le permiten retirar el dinero invertido?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿Se ha dado cuenta de que sus inversiones inicialmente rentables se han detenido?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿Desea conocer la confiabilidad de una plataforma de inversión?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿Le preocupa no poder recuperar su inversión inicial?
            </span>
                        </li>
                        <li className="situations__item">
                            <span className="situations__icon" aria-hidden="true">
                                 <img src={itemIcon} alt=""/>
                            </span>
                            <span className="situations__text">
              ¿No ha recibido noticias de su bróker?
            </span>
                        </li>
                    </ul>

                    <h3 className="situations__note">
                        Si ha respondido afirmativamente a alguna de estas preguntas, es posible que tenga
                        derecho a un reembolso por parte de su bróker
                    </h3>
                </div>
        </div>
    </section>

}