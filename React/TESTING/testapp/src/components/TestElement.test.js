import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestElement from './TestElement';

afterEach(cleanup);

it('should equal to 0',()=>{
    const {getByTestId}=render(<TestElement />);
    expect(getByTestId('counter')).toHaveTextContent(0);
})

it('should be enabled',()=>{
    const {getByTestId}=render(<TestElement />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
})

it('should be disabled',()=>{
    const {getByTestId}=render(<TestElement />);
    expect(getByTestId('button-down')).toBeDisabled();
})
it('increment Counter',()=>{
    const {getByTestId}=render(<TestElement />);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent(1);
})
