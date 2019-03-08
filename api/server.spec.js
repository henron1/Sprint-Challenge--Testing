const request = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('get / ', () => {
        it('should return 200', () => {
            return request(server)
            .get('/games')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('return an empty array', async () => {
            const res = await request(server).get('/games')
            expect(res.body).toHaveLength(0);
        })

        it('should return JSON', async () => {
            const res = await request(server).get('/games');
            expect(res.type).toBe('application/json');
        })

        it('should return 200', () => {
            const body = {
                title:"asdf",
                genre:"something",
                releaseYear:2020
            }

            return request(server)
            .post('/games')
            expect(res.status).toBe(201);
            
        });


        it('should return 422', async () => {
            const body = {
                title:"asdf"
            };
            const res = await request(server)
            .post('/games');
            expect(res.status).toBe(422);
            
        })

        

        it('should return JSON', async () => {
            const res = await request(server).post('/games');
            expect(res.type).toBe('application/json');
        })
    })


})