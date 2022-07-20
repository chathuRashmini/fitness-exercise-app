import React, { useState } from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExcersises from '../components/SearchExcersises'
import Exercises from '../components/Exercises'

const Home = () => {

    const [exercises, setexercises] = useState([])
    const [bodyPart, setbodyPart] = useState('all')

    return (
        <Box>
            <HeroBanner />
            <SearchExcersises 
                setexercises={setexercises} 
                bodyPart={bodyPart}
                setbodyPart={setbodyPart}
            />
            <Exercises
                exercises={exercises}
                setexercises={setexercises} 
                bodyPart={bodyPart}
            />
        </Box>
    )
}

export default Home