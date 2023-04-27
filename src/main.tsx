import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import RoutesRoot from './presentation/routes'
import { setupStore } from './presentation/store/root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <CssBaseline />
      <RoutesRoot />
    </Provider>
  </React.StrictMode>,
)
