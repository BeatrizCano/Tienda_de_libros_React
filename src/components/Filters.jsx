import { useState } from 'react';
import { useFilters } from '../hooks/useFilters';
import SearchBar from './SearchBar';
import PriceRangeSlider from './PriceRangoSlider';
import '../styles/Filters.css';



export function Filters() {
    const { filters, setFilters } = useFilters();
    const [searchError, setSearchError] = useState(false); // Estado para controlar el mensaje de error

    const handleChangeSearchTerm = (value) => {
        setSearchError(false); // Reiniciar el estado de error al cambiar el término de búsqueda
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

    return (
        <section className="filters">
            <div>
                <SearchBar value={filters.searchTerm} onChange={handleChangeSearchTerm} />
                {searchError && <p>No se encontraron resultados.</p>} {/* Mostrar mensaje de error si no se encuentran resultados */}
            </div>
            <div>
                <PriceRangeSlider value={filters.minPrice} onChange={handleChangeMinPrice} />
            </div>            
        </section>
    );
}