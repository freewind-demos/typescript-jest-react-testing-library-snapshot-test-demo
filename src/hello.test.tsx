import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Hello from "./hello";


describe('Hello', () => {
  test('handle onChange', () => {
    const mockOnChange = jest.fn()
    const {container} = render(<Hello name='typescript' onChange={mockOnChange}/>)
    expect(container).toMatchSnapshot();
  });
})
