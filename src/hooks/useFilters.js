import { useContext } from "react"
import { FiltersContext } from "../context/filter"


export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter(book => {
        const searchTerm = filters.searchTerm || ''; // Asegurarse de que searchTerm tenga un valor definido
        return (
            book.price >= filters.minPrice &&
            (
                filters.category === 'all'               
            ) &&
            (
                searchTerm === '' ||
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    }) 
}


  return { filters, filterProducts, setFilters };
}



   