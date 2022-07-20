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
            sx={{
                borderTop: bodyPart === item ? '4px solid #16C07B' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
            }}
            onClick={() => {
                setbodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={icon} alt="icon" style={{ width: '40px', height: '40px' }} />

            <Typography
                fontSize='24px' 
                fontWeight='bold'
                color='#16C07B'
                textTransform='capitalize'
            >{item}</Typography>
        </Stack>
    )
}

export default BodyPart