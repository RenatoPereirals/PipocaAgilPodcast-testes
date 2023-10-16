const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log(lighthouseReport);
        }),
        pa11y: pa11y((pa11yReport) => {
          console.log(pa11yReport);
        }),
      });
    },
  },
};
