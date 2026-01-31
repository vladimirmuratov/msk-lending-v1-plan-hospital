import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-plan-hospital.vercel.app'),
    title: 'Плановая платная госпитализация — комфортное лечение в стационаре',
    description: 'Организация плановой платной госпитализации в клиники и стационары. Подбор отделения, оформление, сопровождение пациента без очередей.',
    keywords: ['платная плановая госпитализация'],
    other: {
        ['yandex-verification']: '325ddc89f995809b',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Плановая госпитализация — платно, без очередей и ожидания. 8 (499) 719-81-00, 24/7',
        description: 'Организуем плановую госпитализацию в стационар: терапия, обследование, хирургия. Платно и без квот. Квалифицированные врачи, комфортные палаты.',
        images: ['/images/banner2.webp'],
        url: 'https://msk-plan-hospital.vercel.app/',
        type: 'website',
        locale: 'ru_RU',
    },
    alternates: {
        canonical: 'https://msk-plan-hospital.vercel.app',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
