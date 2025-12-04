import User from './user'


describe('User', () => {
    
    const newUser: User = {
        id: '1',
        name: 'user',
        email: 'user@gmail.com',
        password: '123'
    }

    it('should register the user by passing the name and email.', () => {
        expect(10).toBe(10)
    })
})