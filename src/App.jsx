import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from './Pages/Cadastro'
import Comentario from './Pages/Comentario'
import ComunidadeExpec from './Pages/ComunidadeExpec'
import ListaComu from './Pages/ListaComu'
import Login from './Pages/Login'
import Perfil from './Pages/Perfil'
import Principal from './Pages/Principal'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Principal/>} />
        <Route path="/comentario" element={<Comentario/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/comunidade" element={<ComunidadeExpec/>} />
        <Route path="/lista-comunidade" element={<ListaComu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/perfil" element={<Perfil/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
