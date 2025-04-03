import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{
                color: 'var(--main-color)',
                marginBottom: '20px',
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 500
            }}>
                О нас
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    marginBottom: '10px'
                }}
            >
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> – надёжный партнёр в плановой госпитализации.

            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Мы специализируемся на организации и проведении платного стационарного лечения, обеспечивая высокий
                уровень медицинских услуг. В нашей команде – квалифицированные специалисты различных направлений, что
                позволяет разрабатывать индивидуальные схемы лечения для каждого пациента.
            </Typography>
        </Box>
    );
};
