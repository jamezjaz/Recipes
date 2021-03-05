import rootReducer from '../../reducers/index';

describe('rootReducer', () => {
  it('should be a function', () => {
    const result = rootReducer;
    expect(typeof result).toBe('function');
  });
});
