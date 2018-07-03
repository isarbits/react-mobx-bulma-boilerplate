declare var __API_URL__: any;
declare var PRODUCTION: any;

const conf = {
  apiUrl: typeof __API_URL__ !== 'undefined' ? __API_URL__ : null,
  isProduction: typeof PRODUCTION !== 'undefined' ? PRODUCTION : null
};

export default conf;
