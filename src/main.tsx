import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hackathon from './hackathon'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hackathon />
  </StrictMode>,
)
