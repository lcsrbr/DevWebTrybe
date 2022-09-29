// tests/integration/chocolates.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);


const mockFile = JSON.stringify({
    brands: [
        {
            id: 1,
            name: 'Lindt & Sprungli',
        },
        {
            id: 2,
            name: 'Ferrero',
        },
        {
            id: 3,
            name: 'Ghirardelli',
        },
    ],
    chocolates: [
        {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
        },
        {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
        },
        {
            id: 3,
            name: 'Mon Chéri',
            brandId: 2,
        },
        {
            id: 4,
            name: 'Mounds',
            brandId: 3,
        },
    ],
    nextChocolateId: 5,
});

describe('Testando a API Cacao Trybe', function () {
    beforeEach(() => {
        sinon.stub(fs.promises, 'readFile')
            .resolves(mockFile);
        sinon.stub(fs.promises, 'writeFile')
            .resolves();
    });
    afterEach(() => {
        sinon.restore();
    });

    describe('Usando o método GET em /chocolates', function () {
        it('Retorna a lista completa de chocolates!', async function () {
            const output = [
                { id: 1, name: 'Mint Intense', brandId: 1 },
                { id: 2, name: 'White Coconut', brandId: 1 },
                { id: 3, name: 'Mon Chéri', brandId: 2 },
                { id: 4, name: 'Mounds', brandId: 3 },
            ]
            ;

            const response = await chai
                .request(app)
                .get('/chocolates');
            expect(response.status).to.be.equal(200);
            expect(response.body.chocolates).to.deep.equal(output);
        });
        it('Cria um chocolate', async function () {
			const response = await chai.request(app)
				.post('/chocolates')
				.send({
					name: 'BlackJacks',
					brandId: 21
				});

			expect(response.status).to.be.equal(201);
			expect(response.body.chocolate).to.deep.equal({
                id: 5,
                name: 'BlackJacks',
                brandId: 21
            });
		});

        it('Retorna o chocolate Mounds', async function () {
            const response = await chai
              .request(app)
              .get('/chocolates/4');
      
            expect(response.status).to.be.equal(200);
            expect(response.body.chocolate).to.deep.equal([
              {
                id: 4,
                name: 'Mounds',
                brandId: 3,
              }]);
          });
          it('Retorna o chocolate Mounds', async function () {
            const response = await chai
              .request(app)
              .get('/chocolates/4');
      
            expect(response.status).to.be.equal(200);
            expect(response.body.chocolate).to.deep.equal([
              {
                id: 4,
                name: 'Mounds',
                brandId: 3,
              }]);
          });
          it('Retorna a quantidade total de chocolates', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/total');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal({totalChocolates: 4});
        });
        it('Retorna os chocolates que contém o termo pesquisado', async function () {
            const result = [
                {
                  "id": 3,
                  "name": "Mon Chéri",
                  "brandId": 2
                },
                {
                  "id": 4,
                  "name": "Mounds",
                  "brandId": 3
                }
              ]
    
            const response = await chai
                .request(app)
                .get('/chocolates/search?name=Mo');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal({chocolates: result});
        });
        it('Retorna [] qd não existirem chocolates com o nome informado', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/search?name=wesleyConcatenado');
            expect(response.status).to.be.equal(404);
            expect(response.body).to.deep.equal([]);
        });
    });
    // src/tests/integration/chocolates.test.js
  // ... outros testes ...
  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });
      
    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/666').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      });
    });
  });
});