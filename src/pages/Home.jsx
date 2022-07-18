import React, { useState } from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExcersises from '../components/SearchExcersises'
import Exercises from '../components/Exercises'

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExcersises />
            <Exercises />
        </Box>
    )
}

export default Home