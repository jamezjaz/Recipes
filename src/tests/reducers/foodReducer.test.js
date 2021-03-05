import foodReducer from '../../reducers/foodReducer';

describe('foodReducer', () => {
  it('should be a function', () => {
    const result = foodReducer;
    expect(typeof result).toBe('function');
  });
});
