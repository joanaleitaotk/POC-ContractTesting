const { Verifier } = require('@pact-foundation/pact');

describe('Pact Verification', () => {
  test('should validate the expectations of our consumer', () => {
    const opts = {
      provider: 'API',
      providerBaseUrl: 'http://localhost:8181/',
      pactBrokerUrl: process.env.PACT_BROKER_URL,
      pactBrokerToken: process.env.PACT_API_TOKEN,
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      logLevel: 'INFO',
    };

    return new Verifier(opts).verifyProvider();
  });
});