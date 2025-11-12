import { useEffect, useState } from "react";
import './header.scss';
import logo from './logo.svg';

export function Header() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const target = document.getElementById('key-metrics');
        if (!target) return;

        // Порог видимости — как только любой пиксель блока попадает в вьюпорт
        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,           // 0 => достаточно минимального пересечения
                rootMargin: '0px',      // при желании сдвиньте, напр.: '-20% 0px 0px 0px'
            }
        );

        io.observe(target);
        return () => io.disconnect();
    }, []);

    return (
        <header className={`header ${visible ? 'header--visible' : ''}`} id="top">
            <div className="header__inner container">
                <a href="#hero" className="header__brand" aria-label="PELayo — home">
                    <span className="header__logo"><img src={logo} alt="" /></span>
                </a>

                <nav className="header__nav" aria-label="Primary">
                    <ul className="header__menu">
                        <li className="header__item"><a className="header__link" href="#who">A-quien</a></li>
                        <li className="header__item"><a className="header__link" href="#process">Proceso</a></li>
                        <li className="header__item"><a className="header__link" href="#services">Servicios</a></li>
                        <li className="header__item"><a className="header__link" href="#about">Sobre mí</a></li>
                        <li className="header__item"><a className="header__link" href="#cases">Casos</a></li>
                        <li className="header__item"><a className="header__link" href="#faq">FAQ</a></li>
                        <li className="header__item"><a className="header__link" href="#contact">Contacto</a></li>
                    </ul>
                </nav>

                <a className="header__cta" href="#contact" role="button">Consulta gratuita</a>

                <button className="header__burger" aria-label="Abrir menú" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="header__burger-bar" />
                    <span className="header__burger-bar" />
                    <span className="header__burger-bar" />
                </button>
            </div>

            <nav id="mobile-menu" className="header__mobile" aria-label="Mobile">
                <ul className="header__mobile-list">
                    <li><a href="#who">A-quien</a></li>
                    <li><a href="#process">Proceso</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#cases">Casos</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a className="header__mobile-cta" href="#contact">Consulta gratuita</a></li>
                </ul>
            </nav>
        </header>
    );
}
