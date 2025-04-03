import { Box, Typography } from '@mui/material';

export const MainInfoBlock = () => {
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
                Забота о вашем здоровье – на шаг впереди.<br />
                Платная плановая госпитализация без ожидания.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная Компания
                    (МСК)</Box> организует платную госпитализацию без ожидания и стресса. Плановое лечение проходит в
                комфортных условиях под наблюдением опытных врачей. Мы обеспечиваем персональный подход, современное
                оснащение и высокий уровень медицинской помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Частная скорая <Box component="span"
                                    sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> оперативно транспортирует
                пациентов по России, включая экстренные случаи и плановые перевозки
                в ведущие клиники Москвы.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Мы работаем <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>24/7</Box>, обеспечивая
                медицинскую поддержку независимо от вашего местоположения.
            </Typography>
        </Box>
    );
};
