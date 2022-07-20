import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px' }
        }}
            position='relative'
            p='20px'
        >
            <Typography
                color="#16C07B"
                fontWeight="600"
                fontSize="26px"
            >
                Fitness Club
            </Typography>

            <Typography
                fontWeight="700"
                sx={{ fontSize: { lg: '44px', xs: '40px'}}}
                mb='23px'
                mt='30px'
                color='#939294'
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography
                fontSize="20px"
                lineHeight='35px'
                mb={8}
                color='#B5B5B5'
            >
                Check out the most effective exercises.
            </Typography>

            <Button
                variant='contained'
                style={{ backgroundColor: '#16C07B', padding: '10px' }}
                href='#exercises'
                className='search-btn'
            >
                Explore Exercises
            </Button>

            <Typography
                fontWeight='600'
                color='#16C07B'
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize='200px'
                mt= '25px'
            >
                Exercise
            </Typography>

            <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner