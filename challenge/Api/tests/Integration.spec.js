const request = require('supertest');
const { expressApp } = require('..');

describe('Teste de integração:', () => {
  describe('Em caso de sucesso na requisição:', () => {
    let response;

    beforeAll(async () => {
      response = await request(expressApp).get('/repos');
    });

    it('Ao fazer a requisição com sucesso, retorna um status 200', () => {
      expect(response.status).toEqual(200);
    });

    it('Ao fazer a requisição com sucesso, retorna uma instância de array', () => {
      expect(response.body).toBeInstanceOf(Array);
    });

    it('Ao fazer a requisição com sucesso, retorna um array com tamanho 5', () => {
      expect(response.body).toHaveLength(5);
    });
  });
});
