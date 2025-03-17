import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/index.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRouter />
  </StrictMode>,
)
