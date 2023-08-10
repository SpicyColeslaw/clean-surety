const express = require('express');
const bodyParser = require('body-parser');
const { buildAPIRouter } = require('./routes');

/**
 ** Function to start http server
* @param {number} port - port number to start server on
* @param {string} appName - name of application
* @returns express server
*/
export function startAPI(appData: { port: number, appName: string }) {
  const app = express();
  
  // library used to neatly put all post data to req.body
  app.use(bodyParser.json());

  // build main api router
  const router = buildAPIRouter();
  app.use('/', router)

  app.listen(appData.port, () => {
    console.log(`Starting ${appData.appName} on port ${appData.port}`);
  });
}
