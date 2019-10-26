import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component', () => {
  test('items count is 11 but should be showed only 10', () => {
    const component = create(
      <Paginator itemsCount={11} pageSize={1} portionSize={10} />,
    );
    const root = component.root;
    const lis = root.findAllByType('li');
    expect(lis.length).toBe(10);
  });

  test('if items count is more then 10, should be present button NEXT', () => {
    const component = create(
      <Paginator itemsCount={11} pageSize={1} portionSize={10} />,
    );
    const root = component.root;
    const button = root.findAllByType('button');
    expect(button.length).toBe(1);
  });
});
