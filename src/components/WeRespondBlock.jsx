import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
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
                Мы обеспечиваем:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Подбор клиники с
                        учётом всех ключевых факторов.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Оценка качества
                        лечения и прозрачности цен.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Полное врачебное
                        сопровождение на всех этапах лечения.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Комплексную
                        поддержку на всех этапах.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>Юридическое
                        сопровождение в медицинских учреждениях.</Typography>
                </Box>

            </Box>
        </Box>
    );
};
