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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Индивидуализированная медицина
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Каждому нашему пациенту уделяется особое внимание с учетом его неповторимых особенностей
                        здоровья и личных предпочтений, что отражается в разработке эксклюзивных медицинских программ.
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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Исследования высочайшего уровня
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Наша команда врачей применяет новейшие диагностические методы и передовые технологии для
                        обеспечения точной постановки диагноза и максимальной эффективности терапии на основе
                        современного оборудования.
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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Уютные условия пребывания в клинике
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы создаем атмосферу заботы, где пациенты находятся в комфортабельных помещениях с
                        профессиональным вниманием персонала и высоким стандартом сервисных услуг на протяжении всего
                        лечения.
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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность финансовых условий
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Все расходы обсуждаются заблаговременно для исключения непредвиденных затрат, обеспечивая полную
                        ясность в вопросах оплаты.
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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Непрерывная защита конфиденциальности
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Мы гарантируем строжайшую сохранность личной информации и медицинских данных пациентов,
                        неукоснительно соблюдая нормы врачебной тайны.
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
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--main-color)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Круглосуточная поддержка
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                        Наш профессиональный коллектив доступен в любое время суток для оперативного реагирования на
                        запросы и обеспечения непрерывной заботы о комфорте пациентов.
                    </Typography>
                </Box>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '5px' }}>
                <Box component="span"
                     sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> обеспечивает комплексную поддержку при необходимости госпитализации на территории Москвы и
                Московской области: от знакомства с лучшими медицинскими учреждениями до детального понимания
                стоимостей, включая отдельные палаты. Мы специализируемся на подборе стационаров в соответствии с вашим
                заболеванием, а также организуем госпитализацию в наилучшие условия.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                В ситуациях отказа от лечения иных клиниками мы выступаем надежным партнером. Особое внимание уделяется
                особенностям госпитализации пожилых граждан: наша поддержка охватывает непрерывное сопровождение 24/7,
                включая все семь дней недели.
            </Typography>
        </Box>
    );
};
