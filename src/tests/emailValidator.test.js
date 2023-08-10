import { expect } from 'chai'; 
import { validate } from '../email-validator.js';
 
describe('first test', () => { 
  it('should return 2', () => {
    expect(2).to.equal(2);
  }) 
}); 



describe('validate - validity of an email address based on its domain', () => {
    it('should be invalid when the email ending is not included in the VALID_EMAIL_ENDINGS', () => {
      const invalidEmail = 'invalid@example.com';
      expect(validate(invalidEmail)).to.be.false;
    });
  
    it('should be invalid when the email ending is empty', () => {
      const invalidEmail = '';
      expect(validate(invalidEmail)).to.be.false;
    });
  
    it('should be invalid when email has no domain', () => {
      const invalidEmail = 'user@';
      expect(validate(invalidEmail)).to.be.false;
    });
  
    it('should be valid when the email ending is included in the VALID_EMAIL_ENDINGS', () => {
      const validEmail = 'user@gmail.com';
      expect(validate(validEmail)).to.be.true;
    });
  });
  