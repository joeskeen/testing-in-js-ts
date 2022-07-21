describe(`Joe's Pizza Shop ordering`, () => {
  let pizzaShop;
  beforeEach(() => {
    // TODO: instantiate the pizza shop
  })
  describe('when you order', () => {
    let pizza;
    describe('a classic', () => {
      describe('cheese', () => {
        beforeEach(() => {
          pizza = {
            ingredients: ['cheese']
          }

          // pizza = pizzaShop.orderClassic('cheese');
        })
        it('should only have cheese', () => {
          expect(pizza.ingredients).toEqual(['cheese']);
        });
      });
      describe('pepperoni', () => {
        beforeEach(() => {
          pizza = {ingredients: ['sausage', 'cheese', 'pepperoni']}
        })
        it('should have two ingredients', () => expect(pizza.ingredients.length).toBe(2));
        it('should have cheese', () => expect(pizza.ingredients).toContain('cheese'));
        it('should have pepperoni', () => expect(pizza.ingredients).toContain('pepperoni'));
        
        it('should only have pepperoni and cheese', () => {
          expect(pizza.ingredients).toContain('pepperoni');
          expect(pizza.ingredients).toContain('cheese');
          expect(pizza.ingredients.length).toBe(2);
        });
      });
      // ...
    });
  });
});
