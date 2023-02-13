import React from 'react';
import { render, screen } from '@testing-library/react';
import groupsMock from './../../mock/groups.json';

import { BrowserRouter } from 'react-router-dom';
import { GroupList } from './GroupList';

describe('GroupItem component', () => {
  const { groups } = groupsMock;
  const setup = () => render(<BrowserRouter><GroupList groups={groups} /></BrowserRouter>)
  
  it('should render component', () => {
    setup();
    const component = screen.getByTestId('GroupList')
    expect(component).toBeInTheDocument();
  });

  it('should match count groups', () => {
    setup();
    const components = screen.getAllByTestId('GroupItem')
    expect(components.length).toBe(groups.length);
  });
});