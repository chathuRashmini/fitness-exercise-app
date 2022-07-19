import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExcersises = ({ setexercises, bodyPart, setbodyPart }) => {

    const [search, setsearch] = useState('')
    const [bodyParts, setbodyParts] = useState([])

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions
            )
            setbodyParts(['all', ...bodyPartsData])
        }

        fetchExerciseData()
    }, [])
    

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions
            )
            console.log('exercisesData: ', exercisesData)
            const searchExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setsearch('')
            setexercises(searchExercises)
        }
    }

    return (
        <Stack alignItems="center" mt='37px' justifyContent="center" p="20px">
            <Typography
                fontWeight="700"
                sx={{
                    fontSize: { lg: '44px', sm: '30px' }
                }}
                mb='50px'
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box position="relative" mb='72px'>
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '1000px', xs: '360px'},
                        backgroundColor: '#FFF'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setsearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />

                <Button 
                    className='search-btn'
                    sx={{
                        bgcolor: '#16C07B',
                        color: '#FFF',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px'},
                        fontSize: { lg: '20px', sm: '14px'},
                        height: '56px',
                        ml: '5px'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar 
                    data={bodyParts} 
                    bodyPart={bodyPart}
                    setbodyPart={setbodyPart}
                />
            </Box>
        </Stack>
    )
}

export default SearchExcersises