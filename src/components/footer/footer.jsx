import './footer.scss'
import footerImage from './image.svg'
import phoneIcon from './phone.svg'
import mailIcon from './mail.svg'
import pinIcon from './geo.svg'

export function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer__inner container">


                <div className="footer__left-col">
                    <nav className="footer__nav" aria-label="Footer">
                        <div className="footer__menu">

                                <a className="footer__link" href="#who">A-quien</a>
                                <a className="footer__link" href="#process">Proceso</a>
                                <a className="footer__link" href="#services">Servicios</a>

                                <a className="footer__link" href="#about">Sobre mí</a>
                                <a className="footer__link" href="#cases">Casos</a>

                                <a className="footer__link" href="#faq">FAQ</a>
                                <a className="footer__link" href="#contact">Contacto</a>

                        </div>
                    </nav>
                    <address className="footer__contacts">
                        <ul className="footer__contacts-list">
                            <li className="footer__contact">
                                <span className="footer__contact-ico" aria-hidden="true"><img src={phoneIcon} alt=""/></span>
                                <a className="footer__contact-link" href="tel:+34631248175">+34 631 248 175</a>
                            </li>

                            <li className="footer__contact">
                                <span className="footer__contact-ico" aria-hidden="true"><img src={mailIcon} alt=""/></span>
                                <span className="footer__contact-text">
                España, Girona, Carrer Narcís Oller 4 (17520)
              </span>
                            </li>

                            <li className="footer__contact">
                                <span className="footer__contact-ico" aria-hidden="true">{<img src={pinIcon} alt=""/>}</span>
                                <span className="footer__contact-text">
                España, Girona, Carrer Narcís Oller 4 (17520)<br />
                Belgium, Brussels, Rue des Grives 87 (1070)
              </span>
                            </li>
                        </ul>
                    </address>
                </div>


                <div className="footer__brand" aria-hidden="true">

                    <img
                        className="footer__brand-image"
                        src={footerImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>



            </div>


            <div className="footer__bottom">
                <div className="footer__bottom-inner container">
                    <a className="footer__legal" href="#privacy">Política de privacidad</a>

                    <div className="footer__copy">
                        © Copyright 2025 Pelayo Gonzalez Hernandez – All Rights Reserved.
                    </div>

                    <a className="footer__legal" href="#terms">Condiciones de uso</a>
                </div>
            </div>
        </footer>
    );
}
