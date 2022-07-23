const express = require('express');

module.exports = class App {
  expressApp;

  constructor() {
    this.expressApp = express();
  }

  start = (PORT) => {
    this.expressApp.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  };

  addRouter = (router) => {
    this.expressApp.use(router);
  };
};
