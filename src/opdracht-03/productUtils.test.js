import { sortByPrice, filterByCategory, searchProducts } from './productUtils';

describe('Product Utils', () => {
  
  // Test data die we in meerdere tests gebruiken
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Muis', price: 25, category: 'electronics' },
    { id: 3, name: 'Bureau', price: 150, category: 'furniture' },
    { id: 4, name: 'Stoel', price: 89, category: 'furniture' }
  ];

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: sortByPrice sorteert op prijs laag naar hoog', () => {
    const result = sortByPrice(products);
    expect(result[0].name).toBe('Muis');
    expect(result[3].name).toBe('Laptop');
  });

  test('filterByCategory geeft alleen electronics terug', () => {
    const result = filterByCategory(products, 'electronics');

    expect(result).toHaveLength(2);
    expect(result[0].category).toBe('electronics');
    expect(result[1].category).toBe('electronics');
  });

  test('filterByCategory geeft lege array bij onbekende categorie', () => {
    const result = filterByCategory(products, 'clothing');

    expect(result).toHaveLength(0);
  });

  test('searchProducts vindt producten met zoekterm', () => {
    const result = searchProducts(products, 'bureau');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Bureau');
  });

  test('searchProducts is case insensitive', () => {
    const result = searchProducts(products, 'LAPTOP');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Laptop');
  });

});