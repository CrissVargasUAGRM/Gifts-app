
import { giphyApi } from '../api/giphy.api';
import type { Gif } from '../interfaces/Gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.response';


export const getGifByQuery = async(query: string): Promise<Gif[]> => {
    try {
        const response = await giphyApi<GiphyResponse>('/search', {
            params: {
                q: query,
                limit: 10
            }
        });

        return response.data.data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.fixed_height.width),
            height: Number(gif.images.fixed_height.height)
        }));
    } catch(error) {
        console.log(error);
        return [];
    }
};