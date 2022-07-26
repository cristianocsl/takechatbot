require('dotenv').config();
const url = require('./helpers/url');
const App = require('./App');
const ReposController = require('./controllers/ReposController');
const ReposRouter = require('./controllers/ReposRouter');
const AxiosInstance = require('./helpers/AxiosInstance');
const ReposModel = require('./models/ReposModel');
const ReposService = require('./services/ReposService');

const app = new App();
const axiosInstance = new AxiosInstance(url);
const reposModel = new ReposModel(axiosInstance);
const reposService = new ReposService(reposModel);
const reposController = new ReposController(reposService);
const reposRouter = new ReposRouter(reposController);

app.addRouter(reposRouter.getRouter());

const { PORT } = process.env;

module.exports = app;

app.start(PORT || 3000);
