import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setbodyPart }) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={
                bodyPart === item ? {
                    borderTop: '4px solid #ff2625',
                    backgroundColor: '#fff'
                } : ''
            }
        >
            <img src={icon} alt="icon" style={{ width: '40px', height: '40px' }} />
        </Stack>
    )
}

export default BodyPart