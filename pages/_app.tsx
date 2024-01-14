import Head from 'next/head';
import { useEffect } from 'react';
import '../src/styles/globals.scss'
import type { AppProps } from 'next/app';
import useNotification from '@/hooks/useNotifications';

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
        <meta name="description" content="High Pony Brass by Whimsy Stiff-Richards! Dates to be announced soon. Follow @highponybrass for updates" />
        <link rel="manifest" crossOrigin="use-credentials" href="manifest.webmanifest" />
        <meta content="social.jpg" name="og:image" />
        <meta name="theme-color" content="#FF70AC" />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="favicon.png"></link>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
