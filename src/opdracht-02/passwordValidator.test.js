import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    const result = validatePassword('Test1');
    expect(result.isValid).toBe(false);
  });

  test('wachtwoord zonder nummer geeft error', () => {
    const result = validatePassword('Welkomtestje');
    expect(result.isValid).toBe(false);
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    const result = validatePassword('welkom123');
    expect(result.isValid).toBe(false);
  });

  test('errors array bevat juiste foutmeldingen', () => {
    const result = validatePassword('test');

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);

    expect(result.errors).toContain('Minimaal 8 karakters');
    expect(result.errors).toContain('Moet minimaal 1 nummer bevatten');
    expect(result.errors).toContain('Moet minimaal 1 hoofdletter bevatten');
  });

});