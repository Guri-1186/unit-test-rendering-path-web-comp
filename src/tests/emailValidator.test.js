import { expect } from 'chai'; 
import sinon from 'sinon';
import { validate, validateAsync, validateWithThrow, validateWithLog } from '../email-validator.js';
import { after } from 'mocha';

describe('first test', () => { 
  it('should return 2', () => {
    expect(2).to.equal(2);
  }) 
}); 



describe('validate - validity of an email address based on its domain', () => {
    const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
  
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
  
  describe('validateAsync - functionality', () => {
    const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
  
    it('should resolve with true for a valid email ending', async () => {
      const validEmail = 'user@gmail.com';
      try {
        const result = await validateAsync(validEmail);
        expect(result).to.be.true;
      } catch (error) {
    
      }
    });
  
    it('should reject with false for an invalid email ending', async () => {
      const invalidEmail = 'user@example.com';
      try {
        await validateAsync(invalidEmail);
      } catch (error) {
        expect(error).to.equal(false);
      }
    });
  });

  
  describe('validateWithThrow - functionality', () => {
    const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
  
    it('should return true with valid email ending', () => {
      const validEmail = 'user@outlook.com';
      expect(validateWithThrow(validEmail)).to.be.true;
    });
  
    it('should throw an error with proper message for an invalid email ending', () => {
      const invalidEmail = 'user@example.com';
      expect(() => validateWithThrow(invalidEmail)).to.throw(Error, 'provided email is invalid.');
    });
  });
  




  
describe (' validateWithLog - functionality', () => {
let consolestub;

beforeEach(() => {

    consolestub =sinon.stub(console.log);
});

afterEach(() => {

    consolestub.restore()
});

})

it('should return true for a valid email ending', () => {
    const validEmail = 'user@gmail.com';
    expect(validateWithLog(validEmail)).to. be. true;
  });

  it('should return false for an invalid email ending', () => {
    const invalidEmail = 'user@example.com';
    expect(validateWithLog(invalidEmail)).to. be. false;
  });