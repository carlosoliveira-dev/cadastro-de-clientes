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

describe('API USER', () => {
    it('deve retornar uma mensagem de erro se tentar cadastrar usuario com nome vazio', async () => {
          
        const response = await request(app)
            .post('/api/usuarios/registrar')
            .send({name: 'john', email: 'john@gmail.com'})
            .expect(400);

        // expect(response.text).toBe(Errors.USUARIO_NOME_VAZIO);
    });
})