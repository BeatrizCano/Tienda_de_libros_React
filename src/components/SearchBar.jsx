import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  const handleInputChange = (event) => {
      onChange(event.target.value);
  }

  return (
      <TextField
          variant="outlined"
          fullWidth
          placeholder="Buscar por libro o autor..."
          value={value}
          onChange={handleInputChange}
          InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                      <SearchIcon />
                  </InputAdornment>
              ),
          }}
          sx={{
              mb: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.87)',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                      borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                      borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                      borderColor: 'rgb(25,114,201)',
                  },
              },
          }}
      />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired, // Cambiado de number a string
  onChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  value: '', // Valor predeterminado como cadena vacía
};

export default SearchBar;