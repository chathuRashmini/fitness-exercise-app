import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

    const [exerciseDetail, setexerciseDetail] = useState({})
    const [exerciseVideos, setexerciseVideos] = useState([])
    const [targetMuscleExercises, settargetMuscleExercises] = useState([])
    const [equipmentExecises, setequipmentExecises] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async() => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setexerciseDetail(exerciseDetailData)

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setexerciseVideos(exerciseVideoData.contents)

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            settargetMuscleExercises(targetMuscleExerciseData)
            
            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setequipmentExecises(equipmentExerciseData)
        }

        fetchExercisesData()
    }, [id])
    

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExecises={equipmentExecises} />
        </Box>
    )
}

export default ExerciseDetail