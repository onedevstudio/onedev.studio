import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;

// eslint-disable-next-line react/prop-types
function OnedevApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles?.parentNode?.removeChild(jssStyles);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Combinei.app</title>
      </Head>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </React.Fragment>
  );
}

OnedevApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { Component, ctx } = appContext;
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps, ...appProps };
};

export default OnedevApp;
