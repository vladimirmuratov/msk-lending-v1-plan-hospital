import {Box, Typography} from '@mui/material'

export const TextBlock = ({text}) => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'var(--main-color)',
                marginY: {xs: '25px', sm: '50px'},
                paddingX: '12px',
                paddingY: '32px'
            }}>
            <Typography sx={{fontSize: '22px', color: '#fff', whiteSpace: 'pre-wrap'}}>{text}</Typography>
        </Box>
    )
}
