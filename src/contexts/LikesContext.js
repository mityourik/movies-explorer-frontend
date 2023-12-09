import React, { useState, createContext } from 'react';
import { mainApi } from '../utils/TempMainApi';

export const LikesContext = createContext();

// eslint-disable-next-line react/prop-types
export const LikesProvider = ({ children }) => {
    const [likedMovies, setLikedMovies] = useState([]);

    const addLike = async (movie) => {
        console.log('Adding like to movie', movie);
        try {
            const response = await mainApi.addMovieLike(movie);
            if (response.ok) {
                setLikedMovies(prevMovies => [...prevMovies, movie]);
                console.log('Updated liked movies after API call:', [...likedMovies, movie]);
            } else {
                console.error('Error adding like to movie');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const removeLike = async (movieId) => {
        console.log('Removing like from movie', movieId);
        try {
            const response = await mainApi.removeMovieLike(movieId);
            if (response.ok) {
                setLikedMovies(likedMovies.filter(movie => movie.id !== movieId));
            } else {
                // Обработка ошибок сервера
                console.error('Error removing like from movie');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <LikesContext.Provider value={{ likedMovies, addLike, removeLike }}>
            {children}
        </LikesContext.Provider>
    );
};

  

// import React, { createContext, useState, useContext } from 'react';
// import { mainApi } from '../utils/TempMainApi';

// // Создание контекста
// const LikesContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const LikesProvider = ({ children }) => {
//     const [likedMovies, setLikedMovies] = useState([]);

//     const addLike = (movie) => {
//         const movieData = {
//             movieId: String(movie.id),
//             country: movie.country,
//             director: movie.director,
//             duration: movie.duration,
//             year: movie.year,
//             description: movie.description,
//             image: `https://api.nomoreparties.co${movie.image.url}`,
//             trailerLink: movie.trailerLink,
//             thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
//             nameRU: movie.nameRU,
//             nameEN: movie.nameEN,
//         };

//         mainApi.saveMovie(movieData)
//             .then((savedMovie) => {
//                 setLikedMovies((prevMovies) => [...prevMovies, savedMovie]);
//             })
//             .catch((error) => {
//                 console.error('Ошибка при сохранении фильма: ', error);
//             });
        
//         localStorage.setItem(movie.id, 'liked');
//     };

//     const removeLike = (movieId) => {
//         const movieIdAsString = String(movieId);
    
//         mainApi.deleteMovie(movieIdAsString)
//             .then(() => {
//                 setLikedMovies((prevMovies) => prevMovies.filter((movie) => movie.movieId !== movieIdAsString));
//             })
//             .catch((error) => {
//                 console.error('Ошибка при удалении фильма: ', error);
//             });

//         localStorage.removeItem(movieId);
//     };

//     const removeMovieFromLiked = (movieId) => {
//         // Удалите фильм из likedMovies и обновите состояние
//         const updatedLikedMovies = likedMovies.filter((movie) => movie.movieId !== movieId);
//         setLikedMovies(updatedLikedMovies);
//         // Сохраните обновленный список likedMovies в локальное хранилище
//         localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));
//     };

//     return (
//         <LikesContext.Provider value={{ likedMovies, setLikedMovies, addLike, removeLike, removeMovieFromLiked }}>
//             {children}
//         </LikesContext.Provider>
//     );
// };

// export const useLikes = () => useContext(LikesContext);