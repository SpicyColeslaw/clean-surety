import 'module-alias/register';
require('dotenv').config(); 

import { startAPI } from './infrastructure/api';

if (process.env.PORT && process.env.APP_NAME) {
  startAPI({
    port: parseInt(process.env.PORT),
    appName: process.env.APP_NAME,
  });
}
