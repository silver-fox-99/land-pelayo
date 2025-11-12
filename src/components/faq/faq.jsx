
import * as React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './faq.scss'
import expendIcon from './expendIcon.svg'

const ITEMS = [
    {
        q: "¿Qué necesito para ayudarte?",
        a: "Describe brevemente lo ocurrido, aporta capturas/recibos y cualquier comunicación con la plataforma o el bróker. Con esto puedo evaluar el caso y proponer los primeros pasos.",
    },
    {
        q: "¿Cómo será el proceso?",
        a: "Analizo la documentación, verifico la jurisdicción y la licitud de la plataforma, preparo las reclamaciones y gestiono las comunicaciones con el banco/entidad o regulador.",
    },
    {
        q: "¿Qué gano al denunciar un fraude?",
        a: "Aumentas las posibilidades de recuperar fondos, bloqueas actividades ilícitas y dejas constancia ante reguladores y entidades financieras.",
    },
    {
        q: "¿Es posible recibir asesoramiento en línea?",
        a: "Sí. Todo el proceso puede gestionarse de forma remota si la normativa no requiere tu presencia.",
    },
];

export function Faq() {
    return (
        <section className="faq" id="faq">
            <div className="faq__inner container">
                <h2 className="faq__title">
                    PREGUNTAS <span className="faq__title-accent">FRECUENTES</span>
                </h2>

                <ul className="faq__list">
                    {ITEMS.map((it, i) => (
                        <li className="faq__item" key={i}>
                            <Accordion
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    bgcolor: "transparent",
                                    borderBottom: "1px solid #e6e9ed",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<img src={expendIcon} alt="" />}
                                    sx={{
                                        px: 0,
                                        minHeight: 56,
                                        "& .MuiAccordionSummary-content": {
                                            m: 0,
                                            py: 1.25,
                                        },
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                            color: "#1f2a36",
                                        },
                                        "&.Mui-expanded": { minHeight: 56 },
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: 600,
                                            color: "#1f2a36",
                                        }}
                                    >
                                        {it.q}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails
                                    sx={{
                                        px: 0,
                                        pt: 0,
                                        pb: 16 / 8,
                                        color: "#5b6570",
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        maxWidth: 900,
                                    }}
                                >
                                    {it.a}
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
