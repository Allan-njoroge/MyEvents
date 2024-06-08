import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Profile, Register, SingleEvent } from './pages'
import Layout from './utils/Layout'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <BrowserRouter>
        <Routes>
          <Route element={ <Layout/> }>
          <Route path={'/'} element={<Home />} />
          <Route path={'/profile'} element={ currentUser ? <Profile /> : < Navigate to="/login" /> } />
          <Route path={'/:id'} element={currentUser ? <SingleEvent /> : < Navigate to="/login" /> } />
        </Route>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App