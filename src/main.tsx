import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './about.css'
import App from './about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
