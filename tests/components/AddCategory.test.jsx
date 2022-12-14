import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing on <AddCategory /> component', () => {

    test('should change the value of input text', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'One Punch' } });

        expect(input.value).toBe('One Punch');
        // screen.debug();
    });

    test('should call onNewCategory method if input has a value', () => {
        const inputValue = 'One Punch';
        const onNewCategory = jest.fn();    // mock function

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        // screen.debug();
    });

    test('should not call onNewCategory method if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});