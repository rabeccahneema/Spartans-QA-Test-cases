const {validatePassword,validateEmail} = require('./dashboard-login');
describe('Validation Functions', () => {
    // Password Tests
    test('validatePassword', () => {
        // Positive cases
        expect(validatePassword("JessyPass1!")).toBe(true);
        expect(validatePassword("Another@Pass1")).toBe(true);
        // Negative cases
        expect(validatePassword("rubyemeline")).toBe(false); // No uppercase, no digit, no special char
        expect(validatePassword("Rabecbecky")).toBe(false); // No digit, no special char
        expect(validatePassword("Bonnette!")).toBe(false); // No lowercase
        expect(validatePassword("12345678")).toBe(false); // No letters, no special char
        expect(validatePassword("NoSpecialChar1")).toBe(false); // No special char
        expect(validatePassword("!@#$%^&*()")).toBe(false); // No letters or digits
        expect(validatePassword("Short1!")).toBe(false); // Too short
  });
})


describe('Validation Functions', () => {
    // Email Tests
    test('validateEmail', () => {
        // Positive cases
        expect(validateEmail("monicakeza@gmail.com")).toBe(true);
       

        // Negative cases
        expect(validateEmail("monicakezagmail")).toBe(false); // No "@" and domain
        expect(validateEmail("@gmail.com")).toBe(false); // Missing username
        expect(validateEmail("monica@.com")).toBe(false); // Missing domain name
    });
});
