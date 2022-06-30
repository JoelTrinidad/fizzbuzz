const app = require('./../../lib/server');
const supertest = require('supertest');
const request = supertest(app);

describe("Test for server", () => {
    
    test("test for explorers endpoint",  async () => {
        const response = await request.get('/v1/explorers/node');
        
        expect(response.status).toBe(200);
    });

    test("test for amount explorers endpoint",  async () => {
        const response = await request.get('/v1/explorers/amount/node');
        
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({mission: "node", quantity: 10})
    });
    
    test("test for explorers username endpoint",  async () => {
        const response = await request.get('/v1/explorers/usernames/node');
        
        expect(response.status).toBe(200);
        expect(response.body.explorers).toContain("ajolonauta12");
    });
    
    test("test for fizzfuzz endpoint",  async () => {
        const response = await request.get('/v1/fizzbuzz/3');
        
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({score: "3", trick: "FIZZ"})
    });
});