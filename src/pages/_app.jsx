import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { GA } from '@src/libs';

const SEO = {
  url: process.env.BASE_URL,
  title: process.env.title || 'Onedev.studio',
  description: process.env.description,
  image: `${process.env.BASE_URL}/share.png`,
};

const GlobalStyle = createGlobalStyle`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  img,
  embed,
  iframe,
  object,
  audio,
  video {
    height: auto;
    max-width: 100%;
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  body {
    color: #424242;
    background-color: #f2f4f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

// eslint-disable-next-line react/prop-types
function OnedevApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);

    if (!window.GA_INITIALIZED) {
      GA.init();
      window.GA_INITIALIZED = true;
    }
    GA.logPageView();

    if (process.env.IS_PROD && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/workbox/sw.js')
        .then((registration) => {
          console.log('service worker registration successful');
          console.log({ registration });
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="theme-color" content="#434546" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SEO.url}/`} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={`${SEO.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:site" content={`${SEO.url}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SEO.image}`} />
        <link rel="index" href={`${SEO.url}/`} />
        <link rel="dns-prefetch" href={`${SEO.url}/`} />
        <link rel="preconnect" href={`${SEO.url}/`} />
        <link rel="prefetch" href={`${SEO.url}/`} />
        <link rel="prerender" href={`${SEO.url}/`} />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
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
