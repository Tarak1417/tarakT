import { Button } from '@mui/material';
import { IoDiamondOutline } from 'react-icons/io5';
import './button.css'; // Import the updated CSS

const GradientButton = ({ handleOpen }) => {
  return (
    <div className="button-container">
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '13px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '8px',
          background: 'linear-gradient(45deg, #6a11cb, #2575fc)', // Gradient for border
          color: 'white',
          transition: 'background 0.5s, transform 0.3s',
          position: 'relative',
          overflow: 'hidden', // Ensure sparkles don't overflow outside the button
          '&:hover': {
            background: 'linear-gradient(45deg, #fc466b, #3f5efb)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <div className="sparkle-container">
          <IoDiamondOutline
            style={{
              fontSize: '12px',
              marginRight: '8px',
              transition: 'transform 0.6s',
              position: 'relative', // To allow rotation around the diamond
              '&:hover + .button-text': {
                animation: 'textRotate 0.6s ease-in-out forwards', // Rotate text
              },
            }}
            className="diamond-icon"
          />
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>
        <span className="button-text">Upgrade</span>
      </Button>
    </div>
  );
};

export default GradientButton;
