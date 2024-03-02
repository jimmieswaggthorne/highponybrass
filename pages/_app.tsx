import Head from 'next/head';
import { useEffect } from 'react';
import '../src/styles/globals.scss'
import type { AppProps } from 'next/app';
import useNotification from '@/hooks/useNotifications';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {

  const { runOneSignal } = useNotification()

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
    runOneSignal()
  }, []);

  return (
    <>
      <Head>
        <title>High Pony Brass by Whimsy Stiff-Richards</title>
        <meta name="description" content="High Pony Brass is a high energy, high camp, and high production cover concert celebrating the music of the Pop & R&B princess herself, Ariana Grande." />
        <link rel="manifest" crossOrigin="use-credentials" href="manifest.webmanifest" />
        <meta content="/social.jpg" name="og:image" />
        <meta name="theme-color" content="#FF70AC" />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/images/icon.png"></link>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Script id="signupVariable">
        {'var _ctct_m="1b34bf71bd3edae68471d7995adbe72a";'}
      </Script>
      <Script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></Script>
    </>
  )
}

export default MyApp;
