/**
 * Given when the door is locked
 * WHEN you flip the lock nub to the other position
 * THEN it unlocks 
 * WHEN a key is inserted
 * THEN an incorrect key does nothing
 */

interface IDoorknob {
  getIsLocked(): boolean;
  toggleLock(): void;
}

class Doorknob implements IDoorknob {
  isLocked: boolean = false;

  constructor() {}
  getIsLocked(): boolean {
    throw new Error("Method not implemented.");
  }
  toggleLock(): void {
    throw new Error("Method not implemented.");
  }
}

describe('doorknob', () => {
  it('toggle locking', () => {
    //Arrange
    const subject = new Doorknob();
    subject.isLocked = true;
    //Act
    subject.toggleLock();
    //Assert
    expect(subject.getIsLocked()).toBe(true);
  })
})


describe('locking doorknob', () => {
  let subject: Doorknob;
  beforeEach(() => {
    subject = new Doorknob();
  });

  describe('when the door is locked', () => {
    beforeEach(() => {
      subject.isLocked = true;
    });

    describe('when you flip the lock nub to the other position', () => {
      beforeEach(() => {
        subject.toggleLock();
      });

      it('should unlock', () => expect(subject.getIsLocked()).toBe(true));
    });

    describe('when a key is inserted', () => {
      describe('if the key is incorrect', () => {
        test.todo('should not work');
      });
    });
  });
});
