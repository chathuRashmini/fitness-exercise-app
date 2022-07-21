import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExecises }) => {
    return (
        <Box sx={{ mt: { lg: '50px', xs: '0'} }} >
            <Typography variant='h4' mb='2px' ml='15px' color='#939294'>
                Exercises that target the <span style={{ color: '#16C07B' }}>same muscle group</span>
            </Typography>

            <Stack
                direction='row'
                style={{ p: '2px', position: 'relative' }}
            >
                { targetMuscleExercises.length ? (
                    <HorizontalScrollbar data={targetMuscleExercises} />
                ) : ( <Loader /> )
                }
            </Stack>

            <Typography variant='h4' mt='10px' mb='2px' ml='15px' color='#939294'>
                Exercises that use the <span style={{ color: '#16C07B' }}>same equipments</span>
            </Typography>

            <Stack
                direction='row'
                style={{ p: '2px', position: 'relative' }}
            >
                { equipmentExecises.length ? (
                    <HorizontalScrollbar data={equipmentExecises} />
                ) : ( <Loader /> )
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises