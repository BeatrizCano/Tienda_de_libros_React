import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const PriceRangeSlider = ({ value, onChange }) => {

    const handleSliderChange = (event, newValue) => {
        onChange(newValue);
      };

  return (
    <Box sx={{ width: 300, mx: 'auto' }}>
      <Typography id="range-slider" gutterBottom>
        Rango de precios
      </Typography>
      <Slider
         value={[value, 100]} // El rango es desde el valor mínimo hasta 100
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        sx={{ mb: 2 }} // Estilo adicional para margen inferior
        aria-labelledby="range-slider"
      />
      <Typography>
        Precio: €{value}
      </Typography>
    </Box>
  );
};
PriceRangeSlider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PriceRangeSlider;
