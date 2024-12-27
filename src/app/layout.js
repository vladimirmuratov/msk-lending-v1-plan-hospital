import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import {Montserrat} from 'next/font/google'
import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/navigation/Navigation'
import {Metrika} from '@/components/Metrika'
import {Suspense} from 'react'
import theme from '@/theme'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin', 'cyrillic']})

export const metadata = {
    title: 'Платная плановая госпитализация. Звоните: +7 (499) 719-81-00, 24/7',
    description: 'Платная плановая госпитализация без очередей! Звоните круглосуточно: +7 (499) 719-81-00. Ваше здоровье — наша забота!',
    keywords: ['платная плановая госпитализация'],
    other: {
        ['yandex-verification']: 'beaa9b40afa410b3',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation/>
                        {children}
                        <Footer/>
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
