import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './global.less'

import Portal from './layouts/portal/Portal.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portal>
      <App />
    </Portal>
  </StrictMode>,
)
