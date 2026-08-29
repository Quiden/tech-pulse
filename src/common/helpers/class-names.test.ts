import { describe, test, expect } from 'vitest';

import { classNames } from './class-names';

describe('class-names', () => {
  test('with only first params', () => {
    expect(classNames('root')).toBe('root');
  });

  test('with additional classes', () => {
    const expected = 'root class1 class2';
    expect(classNames('root', 'class1', 'class2')).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'root hidden scrollable';
    expect(classNames('root', { hidden: true, scrollable: true, disabled: false })).toBe(expected);
  });

  test('with additional classes and mods', () => {
    const expected = 'root class1 hidden scrollable class2';
    expect(classNames('root', 'class1', { hidden: true, scrollable: true, disabled: false }, 'class2')).toBe(expected);
  });
});
