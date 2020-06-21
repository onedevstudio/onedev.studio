import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

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
    if (jssStyles) jssStyles?.parentNode?.removeChild(jssStyles);

    if (process?.env?.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
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
        <title>Onedev.studio</title>
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
