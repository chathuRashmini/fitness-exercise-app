import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'

import { exerciseBodyParts, None } from '../assets/images'

const BodyPart = ({ item, bodyPart, setbodyPart }) => {

    const [bpImg, setbpImg] = useState(None)

    useEffect(() => {
        console.log('item: ', item)
        exerciseBodyParts.map((exerciseBP) => {
            if (exerciseBP.name.toLowerCase() === item) {
                setbpImg(exerciseBP.img)
            }
        })
    }, [item])

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

            <img src={bpImg} alt={bodyPart} style={{ width: '120px', height: '120px', color: '#16C07B', borderRadius: '50px' }} />

            <Typography
                fontSize='24px' 
                fontWeight='bold'
                color='#16C07B'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart