import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

test('renders a button with label',()=>{
    const {getByText}=render(<Button label="Click Me"/>);
    const buttonElement=getByText(/Click Me/i);

    expect(buttonElement).toBeInTheDocument();
})

test('fires onClick prop',()=>{
    const handleClick=jest.fn();
    const {getByText}=render(<Button label="Click Me" onClick={handleClick}/>);
    const buttonElement=getByText(/Click Me/i);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
})
