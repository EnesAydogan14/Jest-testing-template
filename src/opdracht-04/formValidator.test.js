import { 
  isValidEmail, 
  isValidPhone, 
  isValidPostcode, 
  validateForm 
} from './formValidator';

describe('Form Validator', () => {

  // EMAIL TESTS
  test('isValidEmail geeft true voor geldig email', () => {
    expect(isValidEmail('test@email.com')).toBe(true);
  });

  test('isValidEmail geeft false voor ongeldig email', () => {
    expect(isValidEmail('testemail.com')).toBe(false);
  });

  // PHONE TESTS
  test('isValidPhone geeft true voor geldig 06 nummer', () => {
    expect(isValidPhone('0612345678')).toBe(true);
  });

  test('isValidPhone geeft true voor geldig +31 nummer', () => {
    expect(isValidPhone('3112345678')).toBe(true);
  });

  test('isValidPhone geeft false voor ongeldig nummer', () => {
    expect(isValidPhone('12345')).toBe(false);
  });

  // POSTCODE TESTS
  test('isValidPostcode accepteert 1234AB', () => {
    expect(isValidPostcode('1234AB')).toBe(true);
  });

  test('isValidPostcode accepteert 1234 AB', () => {
    expect(isValidPostcode('1234 AB')).toBe(true);
  });

  test('isValidPostcode geeft false voor ongeldige postcode', () => {
    expect(isValidPostcode('12AB')).toBe(false);
  });

  // FORM TESTS
  test('validateForm geeft isValid true bij correcte data', () => {
    const formData = {
      email: 'test@email.com',
      phone: '0612345678',
      postcode: '1234AB'
    };

    const result = validateForm(formData);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('validateForm geeft errors bij verkeerde data', () => {
    const formData = {
      email: 'fout',
      phone: '123',
      postcode: 'abcd'
    };

    const result = validateForm(formData);

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Ongeldig email adres');
    expect(result.errors).toContain('Ongeldig telefoonnummer');
    expect(result.errors).toContain('Ongeldige postcode');
  });

});