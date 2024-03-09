import React from 'react'
import ReactDOM from 'react-dom/client'

import { Slider } from 'morkaf-react-slider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default Banner</h2>
      <Slider />
    </div>
    <hr />
  </React.StrictMode>,
)
