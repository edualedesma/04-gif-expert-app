import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => {

    const category = 'One Punch';

    test('should show loading on start', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        // screen.debug();
    });

    test('should first', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        });

    });

});