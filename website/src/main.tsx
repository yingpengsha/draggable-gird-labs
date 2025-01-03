import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import '@radix-ui/themes/styles.css'
import './global.less'

import { Theme } from '@radix-ui/themes'

import Portal from './layouts/portal/Portal.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme radius="medium">
      <Portal>
        <App />
      </Portal>
    </Theme>
  </StrictMode>,
)
