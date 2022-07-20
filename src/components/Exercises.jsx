import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'

import ExerciseCard from './ExerciseCard'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ setexercises, bodyPart, exercises }) => {

    const [currentPage, setcurrentPage] = useState(1)

    const exercisesPerPage = 10
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setcurrentPage(value)
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []

            if(bodyPart === 'all') {
                exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions
                )
            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions
                )
            }

            setexercises(exercisesData)
        }

        fetchExercisesData()
    }, [bodyPart])
    

    return (
        <Box 
            id="exercises"
            sx={{ mt: { lg: '90px' } }}
            p='0 20px'
        >
            <Typography variant='h3' mb='45px' color='#939294' fontWeight='bold'>
                Showing Results
            </Typography>

            <Stack
                direction='row'
                sx={{ gap: {lg: '90px', xs: '50px'}}}
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
            >
                { currentExercises.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        exercise={exercise}
                    />
                ))}
            </Stack>

            <Stack mt='100px' alignItems='center'>
                { exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises