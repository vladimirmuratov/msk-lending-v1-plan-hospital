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
                    // marginBottom: '10px'
                }}
            >
                Частная медицинская организация <Box component="span"
                                               sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> –
                ваш надежный партнер в вопросах плановой госпитализации.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                В эпоху прогрессивной медицины забота о здоровье занимает центральное место в жизни современного
                человека. В условиях динамичного ритма и растущих ожиданий по качеству медицинских услуг, особое
                предпочтение отдается частным клиникам. Среди передовиков этой сферы выделяется&nbsp;
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> – фирма,
                возглавляющая список поставщиков премиальных медицинских сервисов.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box>&nbsp;
                фокусируется на организации и проведении платной плановой госпитализации,
                предоставляя полный
                спектр услуг высочайшего класса. Наш профессиональный коллектив объединяет высококвалифицированных
                специалистов разных направлений, что позволяет осуществлять индивидуальное комплексное лечение для
                каждого обратившегося пациента.
            </Typography>
        </Box>
    );
};
