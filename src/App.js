import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/system'

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'

import Navabar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navabar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
            </Routes>

            <Footer />
        </Box>
    )
}

export default App