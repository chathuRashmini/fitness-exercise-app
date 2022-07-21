import React from 'react'
import { Box, capitalize, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box
            sx={{ mt: { lg: '50px', xs: '20px' }}}
            p='20px'
            id="exercises"
        >
            <Typography variant='h4' mb='30px' color='#939294'>
                Watch <span style={{ color: '#16C07B', textTransform: 'capitalize'}}>{name}</span> exercise videos!
            </Typography>

            <Stack
                justifyContent='center'
                flexWrap='wrap'
                alignItems='center'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '90px', xs: '0'}
                }}
            >
                { exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a 
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        key={index}
                        className='exercise-video'
                        target='_blank'
                        rel='nopreferrer'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderRadius: '10px' }} />

                        <Box textAlign='center'>
                            <Typography variant='h5' color='#939294'>
                                {item.video.title}
                            </Typography>

                            <Typography variant='h6' color='#B5B5B5'>
                                By {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos