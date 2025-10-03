import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifsApp } from './GiftsApp';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>,
)
