import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import api from './api/axiosConfig'
import './App.css'
import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'

function App() {
  const [movies, setMovies] = useState([])   // empieza como []

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies')
      setMovies(response.data || [])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {}
          <Route index element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
