import { getGifs } from "../../src/helpers/getGifs";

describe('Testing on getGifs()', () => {

    const category = 'One Punch';

    test('should return an array of gifs', async() => {
        const gifs = await getGifs(category);
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

});