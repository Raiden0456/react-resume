import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Analytics} from '@vercel/analytics/react';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
});

export default MyApp;
