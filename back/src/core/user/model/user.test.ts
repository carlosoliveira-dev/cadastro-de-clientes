import User from './user'
import Errors from '@/core/shared/errors'

describe('user validations', () => {
    
    const user = new User({
        name: "",
        email: "user@example.com",
    });

    it("should throw an error when the user's name is empty", () => {
        expect(() => user.validateName()).toThrow(Errors.USUARIO_NOME_VAZIO);
    })

    it("should throw an error when the user's email is empty", () => {
        expect(() => user.validateEmail()).toThrow(Errors.USUARIO_EMAIL_VAZIO);
    })
})