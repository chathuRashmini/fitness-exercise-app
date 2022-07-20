import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <ArrowCircleLeftIcon style={{ width: '40px', height: '40px', color: '#16C07B' }} />
      </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <ArrowCircleRightIcon style={{ width: '40px', height: '40px', color: '#16C07B' }} />
      </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setbodyPart, isBodyParts }) => {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        { data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
          >
            { isBodyParts ? 
              <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart} /> 
              : <ExerciseCard exercise={item} />
            }
          </Box>
        ))}
      </ScrollMenu>
    )
}

export default HorizontalScrollbar