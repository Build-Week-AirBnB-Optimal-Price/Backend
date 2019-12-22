require('dotenv').config();
// bring in route
const server = require('../api/server');
const request = require('supertest');

// bring in db
const db = require('../database/db-config');

describe('Auth.js', () => {
  // before each, reset
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('/login route', () => {
    it('returns a status of 200 if login is successful', async () => {
      let user = {
        first_name: 'Kanan',
        last_name: 'Jarrus',
        email: 'kjarrus@rebels.com',
        username: 'CowboyJedi',
        password: 'SurvivingPadawan'
      };

      const res1 = await request(server)
        .post('/register')
        .send(user);

      expect(res1.status).toBe(201);

      const res2 = await request(server)
        .post('/login')
        .send(user);

      expect(res2.status).toBe(200);
    });
  });

  describe('/Register route', () => {
    it('returns a status of 201 if required fields are filled', async () => {
      let user = {
        first_name: 'Ahsoka',
        last_name: 'Tano',
        email: 'atano@rebels.com',
        username: 'Atano',
        password: 'DualSabers'
      };

      const res = await request(server)
        .post('/register')
        .send(user);

      expect(res.status).toBe(201);
    });

    it('returns a status of 400 if a field is missing', async () => {
      let user = {
        first_name: 'Ahsoka',
        last_name: 'Tano',
        email: '',
        username: 'Atano',
        password: 'DualSabers'
      };

      const res = await request(server)
        .post('/register')
        .send(user);

      expect(res.status).toBe(400);
    });
  });
});
