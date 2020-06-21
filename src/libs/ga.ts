import ReactGA from 'react-ga';

const UA_ID = process?.env?.UA_ID || '';

export const GA = {
  init() {
    return ReactGA.initialize(UA_ID);
  },

  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  },
};
