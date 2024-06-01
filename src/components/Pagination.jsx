import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
// import '../styles/Pagination.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderColor: 'white',
                    '&.Mui-selected': {
                        backgroundColor: 'rgb(25,114,201)',                        
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(25,114,201, 0.1)',
                        color: 'rgb(25,114,201)'
                    },
                },
            },
        },
    },
});

const CustomPagination = ({ count, page, onPageChange }) => {
    
    const handlePageChange = (event, value) => {
        onPageChange(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Pagination
                count={count}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
            />
        </ThemeProvider>
    );
};

CustomPagination.propTypes = {
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;