import type { FC } from 'react';
import type { Gif } from '../../mocks/gifs.mock';

interface Props {
    gifs: Gif[];
}

export const Gifs: FC<Props> = ({gifs}) => {
    return (
        <div className="gifs-container">
            {gifs.map((gif) => (
                <div className="gif-card" key={gif.id}>
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>{gif.width}x{gif.height} (1.5mb)</p>
                </div>
            ))}
        </div>
    );
};