const config = {
  SENTRY_DSN: "https://16cd42e5f05b4fdab5242c67b4b9918f@o1184388.ingest.sentry.io/6301951",
  STRIPE_KEY: "pk_test_51Ki6CjKUphsfmAnN3ZTuXKPGX2DFkBrktf5x1Emz3CqKEsNGTo1a7oLUOwi3qR320KDNgBpRRP4PnLHnA7MY6HAh00DBsFp2H7",
  MAX_ATTACHMENT_SIZE: 5000000,

  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
