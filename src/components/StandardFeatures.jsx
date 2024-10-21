import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Amco from '../assets/Upgradehrimages/bro.png';
import Hand from '../assets/Upgradehrimages/caute1.png';
import Hedi from '../assets/Upgradehrimages/amico.png';
import Robo from '../assets/Upgradehrimages/cuate.png';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


// Sample template data with images and labels
const templates = [
  {
    id: 1,
    image:    Amco,
    label: 'HR analytics',
  },
  {
    id: 2,
    image: Hand,
    label: 'Performance management',
  },
  {
    id: 3,
    image: Hedi,
    label: 'Recruiting / ATS',
  },

  {
    id: 4,
    image: Robo,
    label: 'AI powered candidate matching',
  },
];

const StandardFeatures = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  // Handle left arrow click
  const handlePrevious = () => {
    setCurrentTemplate((prev) =>
      prev === 0 ? templates.length - 1 : prev - 1
    );
  };

  // Handle right arrow click
  const handleNext = () => {
    setCurrentTemplate((prev) =>
      prev === templates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
  
        padding: '24px',
        borderRadius: '12px',
        width: '400px', // Customize width
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{ color: '#fff', marginBottom: '56px', textAlign: 'center',fontSize:'15px',marginTop:'-55px', }}
      >
        Standard includes advanced features like:
      </Typography>

      {/* Image and arrows */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Left arrow */}
      

        {/* Image */}
        <Box
          component="img"
          src={templates[currentTemplate].image}
          alt={templates[currentTemplate].label}
          sx={{
            width: '250px',
            height: '250px',
            marginX: '16px',
            marginBottom:'22px'
          }}
        />

        {/* Right arrow */}

        
      </Box>

      

      {/* Label under image */}
      <Typography sx={{ color: '#fff', marginTop: '16px', textAlign: 'center' }}>
        {templates[currentTemplate].label}
      </Typography>

      {/* Dots for navigation */}

      
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
      <IconButton
          onClick={handlePrevious}
          sx={{
            color: '#fff',marginTop:'-9px',
          }}
        >
          <ArrowBackIos  sx={{height:'12px'}}/>
        </IconButton>
        {templates.map((_, index) => (
            
          <Box
            key={index}
            onClick={() => setCurrentTemplate(index)}
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentTemplate === index ? '#0059ff' : 'gray',
              margin: '0 4px',
              cursor: 'pointer',
            }}
          />
        ))}
<IconButton
          onClick={handleNext}
          sx={{
            color: '#fff',marginTop:'-10px',
          }}
        >
         <ArrowForwardIos sx={{height:'12px'}} />
        </IconButton>

      </Box>
    </Box>
  );
};

export default StandardFeatures;
