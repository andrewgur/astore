import React from 'react';
import { configure, render, screen } from '@testing-library/react';
import { GroupItem } from './GroupItem';
import group from './../../../mock/group.json';

import { BrowserRouter } from 'react-router-dom';

configure({
   testIdAttribute: 'data-test-id'
})

describe('GroupItem component', () => {

  render(<BrowserRouter><GroupItem {...group} /></BrowserRouter>)
  
  it('should render props', () => {
    const title = screen.getByText(group.title);
    const description = screen.getByText(group.description);
    const productsComponent = screen.getByTestId('ProductList')
      
    expect(title.textContent).toBe(group.title);
    expect(description.textContent).toBe(group.description);
    expect(productsComponent).toBeInTheDocument();
  });
});