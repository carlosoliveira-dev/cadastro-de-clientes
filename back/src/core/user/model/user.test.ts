import User from './user'
import Errors from '@/core/shared/errors'

describe('user validations', () => {
    
    const user = new User({
        name: "",
        email: "user@example.com",
    });

    it('returns a message if name of user is empty', () => {
        expect(user.validateName()).toBe(Errors.USUARIO_NOME_VAZIO)
    })
})