const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterEach(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new Ong', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD-Teste",
            email: "Contato@gmail.com",
            whatsapp:"9999999999",
            city: "Rio do sul",
            uf: "SC"
        });

       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
    });
});