const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

module.exports = class ReposController {
  constructor(service) {
    this.reposService = service;
  }

  getRepos = async (req, res) => {
    try {
      const data = await this.reposService.getRepos();
      return res.status(OK).json(data);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err.message);
    }
  };
};
