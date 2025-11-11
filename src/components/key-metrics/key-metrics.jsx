import './key-metrics.scss'

export default function KeyMetrics() {
    return <section className="key-metrics container" aria-labelledby="key-metrics-title">

        <ul className="key-metrics__list">
            <li className="key-metrics__item">
                <h3 className="key-metrics__value">16 años</h3>
                <div className="key-metrics__label">de experiencia</div>
            </li>
            <li className="key-metrics__item">
                <h3 className="key-metrics__value">280K €</h3>
                <div className="key-metrics__label">ahorrados por mis clientes</div>
            </li>
            <li className="key-metrics__item">
                <h3 className="key-metrics__value">70+</h3>
                <div className="key-metrics__label">casos exitosos</div>
            </li>
        </ul>
    </section>

}