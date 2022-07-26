const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const ReposModel = require('../models/ReposModel');
const ReposService = require('../services/ReposService');
const AxiosInstance = require('../helpers/AxiosInstance');
const mockArrayResult = require('./mockArrayResult');

describe('Acesso ao repositório mockAPi', () => {
  describe('Em caso de sucesso na requisição:', () => {
    let result;

    beforeAll(async () => {
      const axiosMock = new MockAdapter(axios);
      axiosMock.onGet().reply(200, mockArrayResult);
      const axiosResponse = new AxiosInstance(axiosMock);
      const reposModelResponse = new ReposModel(axiosResponse);
      const reposService = new ReposService(reposModelResponse);
      result = await reposService.getRepos();
    });

    it('Deve retornar um array com tamanho 5:', () => {
      expect(result).toHaveLength(5);
    });

    it('Cada objeto do Array deve conter a chave language', () => {
      result.forEach((repo) => { expect(repo).toHaveProperty('language'); });
    });

    it('Cada objeto do Array deve conter a chave fullName', () => {
      result.forEach((repo) => { expect(repo).toHaveProperty('fullName'); });
    });

    it('Cada objeto do Array deve conter a chave description', () => {
      result.forEach((repo) => { expect(repo).toHaveProperty('description'); });
    });

    it('Cada objeto do Array deve conter a chave createdAt', () => {
      result.forEach((repo) => { expect(repo).toHaveProperty('createdAt'); });
    });

    it('A chave \'language\' de cada objeto do Array deve conter o valor C#', () => {
      result.forEach((repo) => { expect(repo.language).toBe('C#'); });
    });
  });

  describe('Em caso de falha na requisição:', () => {
    let reposService;

    beforeAll(() => {
      const axiosMock = new MockAdapter(axios);
      axiosMock.onGet().reply(500);
      const axiosResponse = new AxiosInstance(axiosMock);
      const reposModelResponse = new ReposModel(axiosResponse);
      reposService = new ReposService(reposModelResponse);
    });

    it('Deve lançar um erro', async () => {
      try {
        await reposService.getRepos();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });

    it('Deve lançar a seguinte mensagem de erro: \'Não foi possível obter os repositórios\'', async () => {
      try {
        await reposService.getRepos();
      } catch (err) {
        expect(err.message).toBe('Não foi possível obter os repositórios');
      }
    });
  });
});
