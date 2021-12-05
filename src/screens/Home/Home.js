import React, { useState, useEffect } from "react";
import { callApi } from "../../services/services";
import { getByYear } from "../../services/services";
import moviedata from "../../services/moviedata.json";
import Pagination from "../../components/Pagination/Pagination";

export const addToCollectionTest = (movie) => {
    const getMoviesArray = localStorage.getItem('movies');
    const array = JSON.parse(getMoviesArray);

    if (!getMoviesArray) {
        const initArray = [movie];
        localStorage.setItem("movies", JSON.stringify(initArray));
    } else {
        const newArray = [movie, ...array];
        localStorage.setItem("movies", JSON.stringify(newArray));
    }

    const getMovies = localStorage.getItem('movies');
    if (getMovies) {
        return getMovies;
    }
}



const Home = () => {

    useEffect(() => {
        setMovies(moviedata)
    }, [])

    const [txtBuscar, setTxtBuscar] = useState('');
    const [movies, setMovies] = useState(null);
    const [date, setDate] = useState('');

    const onChangeTxtBuscar = async (e) => {
        setTxtBuscar(e.target.value)
        let getMovies = await callApi(e.target.value);
        setMovies(getMovies);
    }

    const onChangeDate = async (e) => {
        const year = new Date(e.target.value);
        setDate(year)
        let getMovies = await getByYear(year, txtBuscar);
        setMovies(getMovies);
    }

    //obtiene los las pelicualas desde el local storage si no existe
    //inserta los nuevos datos cuando ya esta inicializado le agrega 
    //los siguientes peliculas favoritas a la colleccion
    const addToCollection = (movie) => {
        const getMoviesArray = localStorage.getItem('movies');
        const array = JSON.parse(getMoviesArray);

        if (!getMoviesArray) {
            const initArray = [movie];
            localStorage.setItem("movies", JSON.stringify(initArray));
        } else {
            const newArray = [movie, ...array];
            localStorage.setItem("movies", JSON.stringify(newArray));
        }
    }

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="input-field col s6">
                        <input onChange={(e) => onChangeTxtBuscar(e)} value={txtBuscar} placeholder="movie" id="txtBusar" type="text" className="validate" />
                        <label className="active" htmlFor="txtBusar">Movie to search</label>
                    </div>
                    <div className="col s6">
                        <input onChange={(e) => onChangeDate(e)} type="date" className="datepicker" />
                    </div>
                </div>

                {movies ? <Pagination addCollection={(movie) => addToCollection(movie)} movieData={movies} /> : <></>}

            </div>
        </>
    )
}

export default Home;