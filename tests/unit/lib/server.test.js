const request = require('supertest');

const server = require('../../../lib/server');

describe('Server', () => {
    it('Should exist', (done) => {
        request(server)
        .get('/')
        .expect(200, done);
    });
});