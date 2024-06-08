import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFilters } from '../hooks/useFilters';
import SearchBar from './SearchBar';
import PriceRangeSlider from './PriceRangoSlider';
import '../styles/Filters.css';


export function Filters({ setSearchError, products = [] }) {
    const { filters, setFilters, filterProducts } = useFilters();

    const handleChangeSearchTerm = (value) => {
        setFilters(prevState => ({
            ...prevState,
            searchTerm: value
        }));
    };

    const handleChangeMinPrice = (value) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: value[0], // Solo el valor mínimo
        }));
    };

    useEffect(() => {
        if (filters.searchTerm) { // Solo comprobar cuando hay un término de búsqueda
            const results = filterProducts(products);
            setSearchError(results.length === 0);
        } else {
            setSearchError(false); // Reiniciar el estado de error cuando el buscador está vacío
        }
    }, [filters, products, filterProducts, setSearchError]);

    return (
        <section className="filters">
            <div>
                <SearchBar value={filters.searchTerm || ''} onChange={handleChangeSearchTerm} />
            </div>
            <div>
                <PriceRangeSlider value={filters.minPrice} onChange={handleChangeMinPrice} />
            </div>
        </section>
    );
}

// Define PropTypes
Filters.propTypes = {
    setSearchError: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};