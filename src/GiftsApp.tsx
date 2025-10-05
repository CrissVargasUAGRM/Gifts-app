import './App.css'
import { CustomHeader } from './shared/components/CustomHeader'
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar'
import { Gifs } from './gifs/components/Gifs'
import { useState } from 'react';
import type { Gif } from './gifs/interfaces/Gif.interface';
import { getGifByQuery } from './gifs/actions/getGifByQuery.action';

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const onClickTerm = (term: string) => {
    console.log(term);
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
  };

  return (
    <>
      {/* Header */}
      <CustomHeader title='Gifs App' description='Aplicacion de gifs' nombre='Cristhian Vargas'/>
      {/* Search */}
      <SearchBar placeholder='Buscar' onQuery={handleSearch} />
      {/* PreviousSearches */}
      <PreviousSearches searches={previousTerms} onClickSearch={onClickTerm}/>
      {/* Gifs */} 
      <Gifs gifs={gifs} />
    </>
  )
}
