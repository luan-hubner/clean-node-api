import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should returns an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Luan Hubner',
        email: 'luan.hubner@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
