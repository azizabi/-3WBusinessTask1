import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SelectedUserProvider } from './context/SelectedUserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectedUserProvider>
      <App />
    </SelectedUserProvider>
  </StrictMode>,
)
