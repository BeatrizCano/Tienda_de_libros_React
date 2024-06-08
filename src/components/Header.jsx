/* eslint-disable react/prop-types */
import { useState } from "react";
import { Filters } from "./Filters"
import MenuBookIcon from '@mui/icons-material/MenuBook';

export function Header ({ products = [] }) {
  const [searchError, setSearchError] = useState(false);
    return (
        <>
          <h1 className="header">
            <MenuBookIcon className="book-icon" /> Librería Fénix 
          </h1>
           <Filters 
           searchError={searchError}
           setSearchError={setSearchError}
           products={products} // Pasamos los productos al componente filter
          /> 
        </>
      
    )
}