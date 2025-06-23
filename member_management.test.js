
const { addMember } = require('./member_management'); 

describe('addMember', () => {
    beforeEach(() => {
        global.members = {};
    });

    test('should add a member successfully', () => {
        const member = addMember('Monica Keza', 'keza@example.com', '+25075890678', 'Kirugira');
        expect(member).toEqual({
            id: "C0054",
            fullName: 'Monica Keza',
            email: 'keza@example.com',
            phone: '25075890678',
            location: 'Kirugira'
        });
        expect(global.members['keza@example.com']).toBeDefined();
    });

    test('should throw an error if full name is missing', () => {
        expect(() => addMember('', 'keza@example.com', '+25075890678', 'Kirugira')).toThrow("Full Name is required.");
    });

    test('should throw an error if email is missing', () => {
        expect(() => addMember('Monica Keza', '', '+25075890678', 'Kirugira')).toThrow("Email is required.");
    });

    test('should throw an error if phone number is missing', () => {
        expect(() => addMember('Monica Keza', 'keza@example.com', '', 'Kirugira')).toThrow("Phone Number is required.");
    });

    test('should throw an error if location is missing', () => {
        expect(() => addMember('Monica Keza', 'keza@example.com', '+25075890678', '')).toThrow("Location is required.");
    });

    test('should throw an error for invalid email format', () => {
        expect(() => addMember('Monica Keza', 'invalid-email', '+25075890678', 'Kirugira')).toThrow("Invalid email address.");
    });

    test('should throw an error if email already exists', () => {
        addMember('Monica Keza', 'keza@example.com', '+25075890678', 'Kirugira');
        expect(() => addMember('Bonny Umu', 'keza@example.com', '+250758960876', 'Kivu')).toThrow("Email already exists.");
    });

   
});

module.exports = { addMember, members };

