import React, { useEffect, useState } from "react";
import {  NavLink} from "react-router-dom";

function Pagination({ movieData, addCollection }) {
    
    //evalua si los datos han cambiado para poder mostrarlos
    useEffect(() => {
        setData(movieData)
    }, [movieData])
   
    //aqui guarda los datos a mostrar
    const [data, setData] = useState(movieData);
    
    //pagina actual items por pagina
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    //limites de numeros de pagianas
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    //actualiza la pagina actual
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    //guarda la cantidad de items a mostrar por paginas
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    //obtiene los post de la pagina actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    //guarda los numeros de las paginas
    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

   
    //manejo del next boton
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    //manejo del prev boton
    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    //guarda el li del next boton
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    //guarda el li del prev boton
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li  onClick={handlePrevbtn}> &hellip; </li>;
    }

    const setToCollection = (e, movie) =>{
        e.preventDefault()
        addCollection(movie)
    }

    return (
        <>
            <div>
                <h1>List of movies</h1> <br />
               
                <div className="row">
                    {currentItems.map((movie, index) => {
                        return (
                            <div key={index} className="col s12 m5 l5 xl5">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={`${movie.Poster ? movie.Poster : 'https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg'}`} />
                                        <span className="card-title">{movie.Title ? movie.title : movie.title}</span>
                                        <a href="/" onClick={(e)=>setToCollection(e, movie)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite_border</i></a>
                                    </div>
                                    <div className="card-content">
                                        <p>{movie.Type ? movie.Type: movie.Title}</p>
                                    </div>
                                    <div className="card-content">
                                        <p>{movie.Type ? movie.Type: movie.info.genres[0]}</p>
                                    </div>
                                    <div className="card-content">
                                        <p>{movie.Year ? movie.Year: movie.year}</p>
                                    </div>
                                    <div className="card-action">
                                        <NavLink to={`/sendemail/${movie.imdbID ? movie.imdbID : 'tt1798709'} `}>Compartir</NavLink>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
                <ul className="pagination">
                    <li>
                        <button className="waves-effect waves-light btn-small"
                            onClick={handlePrevbtn}
                            disabled={currentPage == pages[0] ? true : false}
                        >
                            Prev
                        </button>
                    </li>
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}

                    <li>
                        <button className="waves-effect waves-light btn-small"
                            onClick={handleNextbtn}
                            disabled={currentPage == pages[pages.length - 1] ? true : false}
                        >
                            Next
                        </button>
                    </li>
                </ul>
               
            </div>
        </>
    );
}

export default Pagination;