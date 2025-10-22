import './App.css'
import { CustomHeader } from './shared/components/CustomHeader'
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar'
import { Gifs } from './gifs/components/Gifs'
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

  const {handleSearch, previousTerms, onClickTerm, gifs} = useGifs();

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
