import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
