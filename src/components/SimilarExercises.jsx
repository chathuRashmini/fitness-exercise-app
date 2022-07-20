import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExecises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0'} }} >
            <Typography variant='h4' mb='2px'>
                Exercises that target the same muscle group
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

            <Typography variant='h4' mb='2px' ml='5px'>
                Exercises that use the same equipments
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