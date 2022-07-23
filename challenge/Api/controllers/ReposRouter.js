const express = require('express');

module.exports = class ReposRouter {
  constructor(controller) {
    this.router = express.Router();
    this.controller = controller;
    this.routes();
  }

  routes = () => {
    this.router.get('/repos', this.controller.getRepos);
  };

  getRouter = () => this.router;
};
