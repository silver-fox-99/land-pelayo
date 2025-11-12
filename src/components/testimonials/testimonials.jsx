import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import './testimonials.scss'
import icon1 from './ic1.png'
import icon2 from './ic2.png'


const DATA = [
    {
        id: "t1",
        text:
            "Inversiones realizadas a través de tarjeta en una plataforma sin licencia. La retirada fue bloqueada y exigían un impuesto... Comunicación clara y sin promesas de 100%.",
        author: "Mauricio Álvarez",
        city: "Barcelona",
        avatar: icon1,
    },
    {
        id: "t2",
        text:
            "Me pidieron pagar un impuesto por la retirada. Logramos recuperar el depósito a través del banco...",
        author: "Juan Carlos",
        city: "Bilbao",
        avatar: icon2,
    },
    {
        id: "t3",
        text:
            "Invertí en cripto con promesas de rentabilidad. Detuvimos pagos y conseguimos recuperar una parte significativa.",
        author: "Elena Martín",
        city: "Madrid",
        avatar: "/img/avatars/elena.jpg",
    },

    {
        id: "t3",
        text:
            "Invertí en cripto con promesas de rentabilidad. Detuvimos pagos y conseguimos recuperar una parte significativa.",
        author: "Elena Martín",
        city: "Madrid",
        avatar: "/img/avatars/elena.jpg",
    },

    {
        id: "t3",
        text:
            "Invertí en cripto con promesas de rentabilidad. Detuvimos pagos y conseguimos recuperar una parte significativa.",
        author: "Elena Martín",
        city: "Madrid",
        avatar: "/img/avatars/elena.jpg",
    },

    {
        id: "t3",
        text:
            "Invertí en cripto con promesas de rentabilidad. Detuvimos pagos y conseguimos recuperar una parte significativa.",
        author: "Elena Martín",
        city: "Madrid",
        avatar: "/img/avatars/elena.jpg",
    },
    // добавь ещё карточки при необходимости
];

export default function Testimonials() {
    const options = { loop: true, align: "start", slidesToScroll: 1 };
    const autoplay = React.useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

    const [selected, setSelected] = React.useState(0);
    const [snapCount, setSnapCount] = React.useState(0);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelected(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        setSnapCount(emblaApi.scrollSnapList().length);
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();
    const scrollTo = (i) => emblaApi?.scrollTo(i);

    return (
        <section className="testimonials" id="testimonials" aria-label="Historias reales y resultados">
            <div className="testimonials__inner container">
                <header className="testimonials__header">
                    <h2 className="testimonials__title">
                        HISTORIAS REALES Y <span className="testimonials__title-accent">RESULTADOS</span>
                    </h2>
                </header>

                {/* Embla */}
                <div className="embla testimonials__embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {DATA.map((t) => (
                                <div className="embla__slide" key={t.id}>
                                    <article className="testimonials__card">
                                        <div className="testimonials__quote" aria-hidden="true">“</div>
                                        <p className="testimonials__text">{t.text}</p>
                                        <hr className="testimonials__divider" />
                                        <div className="testimonials__author">
                                            <img className="testimonials__avatar" src={t.avatar} alt={t.author} />
                                            <div className="testimonials__author-meta">
                                                <div className="testimonials__author-name">{t.author}</div>
                                                {t.city && <div className="testimonials__author-sub">{t.city}</div>}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*<button className="embla__prev" type="button" aria-label="Anterior" onClick={scrollPrev}>‹</button>*/}
                    {/*<button className="embla__next" type="button" aria-label="Siguiente" onClick={scrollNext}>›</button>*/}

                    <div className="embla__dots" role="tablist" aria-label="Paginación">
                        {Array.from({ length: snapCount }).map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                role="tab"
                                className={`embla__dot${i === selected ? " is-active" : ""}`}
                                aria-selected={i === selected}
                                onClick={() => scrollTo(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
