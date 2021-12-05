import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";

export const getTestData = () =>{
    const getMoviesArray = localStorage.getItem('movies');
    const array = JSON.parse(getMoviesArray);
    if (array) {
       return array
    }
} 

const Collections = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () =>{
        const getMoviesArray = localStorage.getItem('movies');
        const array = JSON.parse(getMoviesArray);
        if (array) {
            setMovies(array)
        }
    } 

    return (
        <>
            <div className="container">
                {movies ? <Pagination movieData={movies} /> : <></>}
            </div>
        </>
    )
}

export default Collections;