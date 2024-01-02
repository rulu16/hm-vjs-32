// src/MovieList.js

import React, { useState, useEffect } from 'react';
import './MovieList.css';

const apiUrl = 'http://www.omdbapi.com/?s=Batman&apikey=206d3762';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div key={movie.imdbID} className="movie-item">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
