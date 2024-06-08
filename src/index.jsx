import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
import CustomPagination from './components/Pagination'
import usePagination from './hooks/usePagination'

function Index() {

  const [products] = useState(initialProducts);
  const {  filterProducts } = useFilters();
  const filteredProducts = filterProducts(products); // Ahora inicializamos filteredProducts aquí
  const { currentPage, totalPages, handlePageChange, getPageItems } = usePagination(filteredProducts.length, 10);

  const selectedProducts = getPageItems(filteredProducts);

   // Estado para controlar si se ha encontrado un error de búsqueda
   const [searchError, setSearchError] = useState(false);
  
  return (
      <CartProvider>
          <Header 
            searchError={searchError}
            setSearchError={setSearchError}
          />
          <Cart />
          <Products products={selectedProducts} />
          <CustomPagination
            count={totalPages}
            page={currentPage}
            onPageChange={handlePageChange}
          />
          { IS_DEVELOPMENT}
      </CartProvider>
  );
}

export default Index;
