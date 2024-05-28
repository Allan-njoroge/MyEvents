import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateEvent, Home, Login, MyEvents, Profile, Register, SingleEvent } from './pages'
import Layout from './utils/Layout'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={ <Layout/> }>
          <Route path={'/'} element={<Home />} />
          <Route path={'/create'} element={<CreateEvent />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/events'} element={<MyEvents />} />
          <Route path={'/event'} element={<SingleEvent />} />
        </Route>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App