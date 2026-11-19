import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorities from './pages/Favorites/Favorites'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorities" element={<Favorities />} />
    </Routes>
  )
}

export default App
