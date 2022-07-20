import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none'}}>
            <img src={exercise.gifUrl} alt={exercise.name} />

            <Stack direction='row'>
                <Button sx={{ 
                        ml: '21px', 
                        color: '#FFF', 
                        background: '#12A56A',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                }}>
                    { exercise.bodyPart }
                </Button>
                <Button sx={{ 
                        ml: '21px', 
                        color: '#FFF', 
                        background: '#16C026',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                }}>
                    { exercise.target }
                </Button>
            </Stack>

            <Typography
                ml='21px'
                color='#37C58C'
                fontWeight='bold'
                mt='10px'
                pb='10px'
                textTransform='capitalize'
                fontSize='22px'
            >
                { exercise.name }
            </Typography>
        </Link>
    )
}

export default ExerciseCard