import Errors from '@/core/shared/errors';
import app from './app';
import request from 'supertest';

describe('API', () => {

    it('should return "Hello, Express + TypeScript!" from /', async () => {
        
        const response = await request(app)
            .get('/')
            .expect(200);

        expect(response.text).toBe('Hello, Express + TypeScript!');
    });

});

describe('RegisterUserController()', () => {
    it('deve retornar uma mensagem de erro se tentar cadastrar usuario com nome vazio', async () => {
          
            await request(app)
            .post('/api/usuarios/registrar')
            .send({name: '', email: 'user@gmail.com'})
            .expect(400);
    });

     it('deve retornar uma mensagem de erro se tentar cadastrar usuario com email vazio', async () => {
          
            await request(app)
            .post('/api/usuarios/registrar')
            .send({name: 'user', email: ''})
            .expect(400);
    });
})
