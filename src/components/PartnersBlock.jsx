import {Box, Typography} from '@mui/material'
import {partners} from '@/config'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'

export const PartnersBlock = () => {
    return (
        <Box
            component="section"
            id="partners"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '12px',
                // paddingX: {xs: '8px', sm: '32px'},
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}>
            <Typography variant="h4"
                        sx={{
                            marginBottom: '20px',
                            fontSize: {xs: '28px', sm: '34px'},
                            fontWeight: 500
                        }}>Партнеры</Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '10px'}}>
                Мы сотрудничаем со следующими лечебными учреждениями:
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                gap: {xs: '3px', sm: '5px', md: '10px'},
            }}>
                {partners.map((item) => <BasePartnerCard key={item.id} {...item}/>)}
            </Box>

        </Box>
    )
}
