/* eslint-disable react/prop-types */
import { Filters } from "./Filters"
import MenuBookIcon from '@mui/icons-material/MenuBook';

export function Header ({searchError, setSearchError}) {
    return (
        <>
          <h1 className="header">
            <MenuBookIcon className="book-icon" /> Librería Fénix 
          </h1>
           <Filters 
           searchError={searchError}
           setSearchError={setSearchError}
          /> 
        </>
      
    )
}