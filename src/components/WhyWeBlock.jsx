import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
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
                Преимущества сотрудничества с нами:
            </Typography>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Индивидуальный подход
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Лечение с учётом состояния здоровья и личных предпочтений.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Точная диагностика
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Новейшие методы и оборудование для эффективной терапии.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Комфортные условия
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Удобные палаты и внимательный медицинский персонал.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность цен
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Заранее обсуждённые расходы без скрытых платежей.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Конфиденциальность
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Строгая защита личных и медицинских данных.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Круглосуточная поддержка
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Оперативное реагирование на запросы 24/7.
                    </Typography>
                </Box>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '5px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> организует госпитализацию
                в ведущие клиники Москвы и области, включая подбор стационара по
                профилю заболевания. В случае отказа других медучреждений мы находим решение, уделяя особое внимание
                пожилым пациентам и обеспечивая их сопровождение 24/7.
            </Typography>
        </Box>
    );
};
