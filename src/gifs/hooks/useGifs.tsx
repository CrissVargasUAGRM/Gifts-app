import { useRef, useState } from "react";
import type { Gif } from "../interfaces/Gif.interface";
import { getGifByQuery } from "../actions/getGifByQuery.action";


export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const onClickTerm = (term: string) => {
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term]);
            return;
        }
    };

    const handleSearch = async(query: string) => {
        // Validar que el query no esté vacío
        if(query.trim().length === 0) return;
        //Convertir el query a minúsculas y eliminar espacios en blanco
        const newQuery = query.trim().toLowerCase();
        // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        if(previousTerms.includes(newQuery)) return;
        // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
        setPreviousTerms((preTerm) => [newQuery, ...preTerm].slice(0,8));
        const gifs = await getGifByQuery(query);
        setGifs(gifs);
        gifsCache.current[query] = gifs;
    };

    return {
        handleSearch,
        previousTerms,
        onClickTerm,
        gifs
    };
};