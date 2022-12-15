import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing on <GifExpertApp />', () => {

    test('should match with snapshot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

    });

    test('should first', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'One Punch2' } });

        //expect(input.value).toBe('One Punch');

        screen.debug();

    });

});