// import axios from 'axios';

// La conexión a la api "OpenLibrary" funciona bien, pero aún no se han implementado las imágenes por lo que usaremos un json
// El resto del código no está actulizado para usar esta conexión


// Función para obtener los libros
// const fetchBooks = async () => {
//   try {
//     const response = await axios.get('https://openlibrary.org/search.json?author=tolkien&sort=new');
//     console.log(response);
//     return response.data.docs.map(book => ({
//       id: book.key ? book.key.replace('/works/', '') : null, // Usar la propiedad 'key' como id si está presente
//       title: book.title,
//       publisher: book.publisher ? book.publisher[0] : "Unknown",
//       publishYear: book.publish_year ? book.publish_year[0] : "Unknown",
//       coverImageUrl: book.edition_key ? `https://covers.openlibrary.org/a/olid/${book.edition_key[0]}-M.jpg` : null,
//       price: Math.floor(Math.random() * 50) + 10 // Precio aleatorio entre 10 y 60
//     }));
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     throw error;
//   }
// };

// export { fetchBooks };
