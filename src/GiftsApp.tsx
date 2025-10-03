import './App.css'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

export const GifsApp = () => {

  return (
    <>
      {/* Header */}
      <CustomHeader title='Gifs App' description='Aplicacion de gifs'/>
      {/* Search */}
      <SearchBar />
    </>
  )
}
