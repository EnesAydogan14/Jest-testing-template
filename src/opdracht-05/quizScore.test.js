import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    const result = calculatePercentage(quizAnswers);
    expect(result).toBe(80);
  });

  test('isPassed geeft true bij 60% of hoger', () => {
    const result = isPassed(quizAnswers);
    expect(result).toBe(true);
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: false, points: 0 }
    ];

    const result = isPassed(answers);
    expect(result).toBe(false);
  });

  test('getGrade geeft Excellent bij 90%+', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 },
      { question: 6, isCorrect: true, points: 10 },
      { question: 7, isCorrect: true, points: 10 },
      { question: 8, isCorrect: true, points: 10 },
      { question: 9, isCorrect: true, points: 10 },
      { question: 10, isCorrect: false, points: 0 }
    ];

    const result = getGrade(answers);
    expect(result).toBe('Excellent');
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    const result = getGrade(quizAnswers);
    expect(result).toBe('Goed');
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    const result = countWrongAnswers(quizAnswers);
    expect(result).toBe(1);
  });

});