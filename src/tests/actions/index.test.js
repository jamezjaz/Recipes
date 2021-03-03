import { foodFilterAction, foodRequest, foodRequestFailure, foodRequestSuccess } from '../../actions';
import { CHANGE_FILTER, FETCH_FOODS_FAILURE, FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS } from '../../actions/actionTypes';

describe('actions/foodRequest', () => {
  test('contains FETCH_FOODS_REQUEST variable', () => {
    expect(FETCH_FOODS_REQUEST).toBe('FETCH_FOODS_REQUEST');
  });

  test('foodRequest returns an object with type', () => {
    const result = foodRequest('food');
    expect(result.type).toBe(FETCH_FOODS_REQUEST);
  });
});

describe('actions/foodRequestSuccess', () => {
  let result;

  beforeEach(() => {
    result = foodRequestSuccess('food');
  });

  test('contains FETCH_FOODS_SUCCESS variable', () => {
    expect(FETCH_FOODS_SUCCESS).toBe('FETCH_FOODS_SUCCESS');
  });

  test('foodRequestSuccess returns an object with payload', () => {
    expect(result.payload).toBe('food');
  });

  test('foodRequestSuccess returns an object with type', () => {
    expect(result.type).toBe(FETCH_FOODS_SUCCESS);
  });
});

describe('actions/foodRequestFailure', () => {
  let result;

  beforeEach(() => {
    result = foodRequestFailure('error');
  });

  test('contains FETCH_FOODS_FAILURE variable', () => {
    expect(FETCH_FOODS_FAILURE).toBe('FETCH_FOODS_FAILURE');
  });

  test('foodRequestFailure returns an object with payload', () => {
    expect(result.payload).toBe('error');
  });

  test('foodRequestFailure returns an object with type', () => {
    expect(result.type).toBe(FETCH_FOODS_FAILURE);
  });
});

describe('actions/foodFilterAction', () => {
  let result;

  beforeEach(() => {
    result = foodFilterAction('starter');
  });

  test('contains CHANGE_FILTER variable', () => {
    expect(CHANGE_FILTER).toBe('CHANGE_FILTER');
  });

  test('foodFilterAction returns an object with payload', () => {
    expect(result.payload).toBe('starter');
  });

  test('foodFilterAction returns an object with type', () => {
    expect(result.type).toBe(CHANGE_FILTER);
  });
});