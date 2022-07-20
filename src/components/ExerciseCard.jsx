import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none'}}>

            <img src={exercise.gifUrl} alt={exercise.name} />

            <Stack direction='row' justifyContent='center'>
                <Button sx={{ 
                    ml: '21px', 
                    color: '#FFF', 
                    background: '#16C07B',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                    border: '2px solid #FFF',
                }} className='search-btn'
                >
                    { exercise.bodyPart }
                </Button>
                <Button sx={{ 
                        ml: '21px', 
                        color: '#FFF', 
                        background: '#16C07B',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        border: '2px solid #FFF',
                }} className='search-btn' >
                    { exercise.target }
                </Button>
            </Stack>

            <Typography
                ml='21px'
                color='#16C07B'
                fontWeight='bold'
                mt='10px'
                pb='10px'
                textTransform='capitalize'
                fontSize='22px'
                textAlign='center'
            >
                { exercise.name }
            </Typography>
        </Link>
    )
}

export default ExerciseCard