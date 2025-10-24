import AxiosMockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { giphyApi } from "../api/giphy.api";
import { getGifByQuery } from "./getGifByQuery.action";
import { giphySearchResponseMock } from "../../mocks/giphy.response.mock";

describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() =>{
        mock = new AxiosMockAdapter(giphyApi);
    });

    test('Should return a list of list', async() => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifByQuery('goku');

        expect(gifs.length).toBe(10);
        for (const gif of gifs) {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        }
    });

    test('Check return a empty list', async() => {
        mock.onGet('/search').reply(200, {
            data: [],
            pagination: {
                total_count: 0,
                count: 0,
                offset: 0
            },
            meta: {
                status: 200,
                msg: 'OK',
                response_id: 'test_response_id'
            }
        });

        const gifs = await getGifByQuery('');

        expect(gifs.length).toBe(0);
    });

    test('should handle error when the API returns an error', async() => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

        mock.onGet('/search').reply(500, {
            data: {
                message: 'Bad Request'
            }
        });

        const gifs = await getGifByQuery('naruto');

        expect(gifs.length).toBe(0);
    });
});