import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#16C07B'>
      <Stack gap='40px' alignItems='center' px='40px' pt='25px'>
        <img src={Logo} alt="logo" width='200px' height='40px' />

        <Typography pb='30px' color='#FFF'>
          Made with love by Chathu Rashmini!
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer