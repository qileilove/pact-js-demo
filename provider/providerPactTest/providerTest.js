const verifier = require('pact').Verifier;

describe('Pact Verification', () => {
    it('should validate the expectations of Matching Service', () => {

        const opts = {
            providerBaseUrl: 'http://localhost:3001', // where your service will be running during the test, either staging or localhost on CI
            providerGetUser: 'http://localhost:3001/user/:id', // the url to call to set up states
            pactUrls: ['http://localhost:8080/pacts/provider/QileiTestProductService/consumer/QileiTestClient/latest'], // the pacts to test against
            publishVerificationResult: true,
            providerVersion: '1.0.3'
          }
          
        return verifier.verifyProvider(opts)
            .then(output => {
                console.log('Pact Verification Complete!');
                console.log(output)
            });
    });
});