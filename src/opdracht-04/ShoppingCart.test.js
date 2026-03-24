import { ShoppingCart } from './shoppingCart';

describe('ShoppingCart', () => {

  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  const product1 = { id: 1, name: 'Laptop', price: 1000 };
  const product2 = { id: 2, name: 'Muis', price: 50 };

  test('start met lege cart', () => {
    expect(cart.items).toHaveLength(0);
  });

  test('addItem voegt product toe', () => {
    cart.addItem(product1);

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].name).toBe('Laptop');
  });

  test('addItem met quantity werkt correct', () => {
    cart.addItem(product1, 3);

    expect(cart.items[0].quantity).toBe(3);
  });

  test('removeItem verwijdert product', () => {
    cart.addItem(product1);
    cart.addItem(product2);

    cart.removeItem(1);

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].id).toBe(2);
  });

  test('getTotal berekent totaalprijs', () => {
    cart.addItem(product1, 1); // 1000
    cart.addItem(product2, 2); // 100

    const total = cart.getTotal();

    expect(total).toBe(1100);
  });

  test('getItemCount telt alle items', () => {
    cart.addItem(product1, 2);
    cart.addItem(product2, 3);

    const count = cart.getItemCount();

    expect(count).toBe(5);
  });

  test('clear maakt winkelwagen leeg', () => {
    cart.addItem(product1);
    cart.addItem(product2);

    cart.clear();

    expect(cart.items).toHaveLength(0);
  });

});