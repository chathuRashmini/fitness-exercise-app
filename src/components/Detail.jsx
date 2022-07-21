import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {

    const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]

    return (
        <Stack
            gap='60px'
            sx={{ flexDirection: { lg: 'row', }, p: '20px', alignItems: 'center'}}
        >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />

            <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
                <Typography variant='h3' color="#16C07B"  textTransform='capitalize'>
                    { name }
                </Typography>

                <Typography variant='h6' color='#939294' textAlign='justify'>
                    Exercises keep you strong. {name} {` `} 
                    is one of the best exercises to target your {target}.
                    It will help you to imrpove your mood and figure.
                </Typography>

                { extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{ 
                                background: '#16C07B', 
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                color: '#FFF',
                                cursor: 'default'
                            }}
                            className='details-icon'
                        >
                            <FitnessCenterIcon style={{ width: '25px', height: '25px' }} />
                        </Button>

                        <Typography variant='h6' textTransform='capitalize' color='#B5B5B5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail