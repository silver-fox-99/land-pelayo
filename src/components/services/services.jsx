import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './services.scss'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'

export function Services() {
    return (
        <section className="services" id="services">
            <div className="services__inner container">
                <h2 className="services__title">MIS SERVICIOS</h2>
                <p className="services__lead">Entiendo la complejidad y las implicaciones legales de los casos de fraude y para defender los derechos e intereses de mis clientes</p>

                <ul className="services__list">
                    <li className="services__item">
                        <div className="services__row">
                            <div className="services__media-col">
                                <img className="services__media-img" src={s1} alt="" aria-hidden />
                            </div>

                            <Accordion className="services__acc" elevation={0} disableGutters>
                                <AccordionSummary className="services__acc-summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="services__num">01</span>
                                    <span className="services__title-main">Forex estafa</span>
                                </AccordionSummary>
                                <AccordionDetails className="services__acc-details">
                                    <p className="services__panel-text">El mercado de divisas Forex es un mercado internacional donde se negocian diferentes monedas. Muchas personas y empresas se están aprovechando del mercado de divisas conocido como FOREX, ofreciendo oportunidades y esquemas de inversión "rentables".
                                        Si has sido afectado, es importante buscar ayuda de abogados especializados en casos contra plataformas de inversión.</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>

                    <li className="services__item">
                        <div className="services__row">
                            <div className="services__media-col">
                                <img className="services__media-img" src={s2} alt="" aria-hidden />
                            </div>

                            <Accordion className="services__acc" elevation={0} disableGutters>
                                <AccordionSummary className="services__acc-summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="services__num">03</span>
                                    <span className="services__title-main">Fraude de criptomonedas</span>
                                </AccordionSummary>
                                <AccordionDetails className="services__acc-details">
                                    <p className="services__panel-text">Las criptomonedas como Bitcoin, Ethereum y otras son dinero digital que se compra y vende usando una tecnología segura llamada blockchain. Son populares porque ofrecen la oportunidad de ganar dinero al hacer transacciones. Pero debes tener cuidado, porque hay muchos sitios web y aplicaciones móviles falsas que intentan estafarte.</p>
                                    <p className="services__panel-text">Si has sido afectado, es importante buscar ayuda de abogados especializados en casos contra plataformas de inversión.</p>

                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>

                    <li className="services__item">
                        <div className="services__row">
                            <div className="services__media-col">
                                <img className="services__media-img" src={s3} alt="" aria-hidden />
                            </div>

                            <Accordion className="services__acc" elevation={0} disableGutters>
                                <AccordionSummary className="services__acc-summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="services__num">03</span>
                                    <span className="services__title-main">Estafas de trading</span>
                                </AccordionSummary>
                                <AccordionDetails className="services__acc-details">
                                    <p className="services__panel-text">Los estafadores inventan trampas o engaños tipo Ponzi para aparentar ganancias rápidas en las inversiones de nuevas personas y así poder pagar a los antiguos inversionistas.</p>
                                    <p className="services__panel-text">Su plan consiste en presionar constantemente a los nuevos miembros para que sigan construyendo la pirámide, invitando a personas cercanas como familiares y amigos, prometiéndoles grandes ganancias.</p>
                                    <p className="services__panel-text">Si ha sido víctima de un fraude, póngase en contacto conmigo para obtener asistencia jurídica.</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>

                    <li className="services__item">
                        <div className="services__row">
                            <div className="services__media-col">
                                <img className="services__media-img" src={s4} alt="" aria-hidden />
                            </div>

                            <Accordion className="services__acc" elevation={0} disableGutters>
                                <AccordionSummary className="services__acc-summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="services__num">04</span>
                                    <span className="services__title-main">Estafa bitcoins</span>
                                </AccordionSummary>
                                <AccordionDetails className="services__acc-details">
                                    <p className="services__panel-text">El Bitcoin es una criptomoneda descentralizada que funciona a través de la tecnología de blockchain. Se utiliza como medio de intercambio digital y se puede almacenar en una billetera virtual.</p>
                                    <p className="services__panel-text">En caso de ser víctima de estafas relacionadas con Bitcoin u otras criptomonedas, puede solicitar asesoramiento jurídico y asistencia legal.</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
