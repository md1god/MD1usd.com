import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/spatial-network.css'
import { initOrbs } from './utils/orbs'
import { initFx } from './utils/fx'
import { initDrag } from './utils/drag'

initOrbs()
initDrag({ sel: '[data-drag]' })    // floating buttons can be moved anywhere and remember their place
initFx({ words: false })   // React owns the text nodes: animate whole blocks, never split words

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
