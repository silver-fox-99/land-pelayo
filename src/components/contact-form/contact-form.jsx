import * as React from "react";
import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
} from "@mui/material";
import './contact.scss'

export function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // TODO: send data
    };

    return (
        <section className="contact" id="contact">

            <div className="contact__ornament contact__ornament--left" aria-hidden="true" />
            <div className="contact__ornament contact__ornament--right" aria-hidden="true" />

            <Box className="contact__inner container" sx={{ py: { xs: 6, md: 10 } }}>
                <Paper
                    className="contact__card"
                    elevation={0}
                    sx={{
                        mx: "auto",
                        p: { xs: 3, md: 4 },
                        maxWidth: 760,
                        borderRadius: 3,
                        bgcolor: "#fff",
                    }}
                >
                    <Typography
                        component="h2"
                        align="center"
                        sx={{
                            fontFamily: '"Bodoni Moda", serif',
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: { xs: 28, md: 36 },
                            lineHeight: 1.15,
                            mb: 1.5,
                        }}
                    >
                        ¿Eres víctima de una <Box component="span" sx={{ color: "#B7925A" }}>estafa</Box>?
                    </Typography>

                    <Typography
                        align="center"
                        sx={{ color: "text.secondary", fontSize: 14, mb: 3 }}
                    >
                        Contáctenos para asistencia legal
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2} columns={12}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    name="firstName"
                                    placeholder="Nombre"
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                    InputProps={{ sx: { borderRadius: 2 } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    name="lastName"
                                    placeholder="Apellido"
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                    InputProps={{ sx: { borderRadius: 2 } }}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                    InputProps={{ sx: { borderRadius: 2 } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    name="phone"
                                    placeholder="Número de teléfono"
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                    InputProps={{ sx: { borderRadius: 2 } }}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    name="amount"
                                    placeholder="Importe de la inversión en EUR/USD"
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                    InputProps={{ sx: { borderRadius: 2 } }}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }} className="contact__message">
                                <Box sx={{ position: 'relative' }}>
                                    <TextField
                                        name="message"
                                        placeholder="Información sobre su caso"
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        variant="outlined"
                                        InputProps={{ sx: { borderRadius: 2 } }}
                                    />

                                </Box>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                className="contact__send"
                                sx={{
                                    mt: { xs: 2, md: 0 },
                                    borderRadius: '999px',
                                    px: 3,
                                    height: '56px',
                                    bgcolor: '#06234F',
                                    color: '#fff',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    ':hover': { bgcolor: '#0a2745' }
                                }}
                            >
                                Enviar
                            </Button>

                            <Grid size={{xs:12}} >
                                <FormControlLabel
                                    control={<Checkbox name="agree" color="primary" />}
                                    label={
                                        <Typography sx={{ fontSize: 14, color: '#5B6570' }}>
                                            Al enviar, acepta la <Link href="#" sx={{color: '#0058B4'}} underline="hover">Política de privacidad</Link>.
                                            No garantizamos resultados; asesoramos según la evidencia y la normativa aplicable.
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>

                </Paper>
            </Box>
        </section>
    );
}
