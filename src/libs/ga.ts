import ReactGA from 'react-ga';

export const GA = {
  init() {
    return ReactGA.initialize(process.env.UA_ID);
  },

  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  },
};
