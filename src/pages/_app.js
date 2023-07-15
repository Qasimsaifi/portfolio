import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  
  return (

    <ThemeProvider enableSystem={true} attribute='class'>
    <NextNProgress color="#A855F7"/>
    <Component {...pageProps} />
    </ThemeProvider>
    )
    
}
