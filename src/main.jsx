import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/themeProvider.jsx'
import ContextAPi from './context/ContextAPi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ContextAPi>
        <App />
      </ContextAPi>
    </ThemeProvider>
  </StrictMode>,
)
