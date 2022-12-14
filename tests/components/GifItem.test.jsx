import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests on <GifItem /> component', () => {

    const title = "One Punch";
    const url = "https://one-punch.com/saitama.jpg";

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the url and alt', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show the title inside the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});