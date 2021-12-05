export const callApi = async (text) => {
    const apiKey = 'd489d640';
    let dataMovies;

  await fetch(`https://www.omdbapi.com/?s=${text}&apiKey=${apiKey}`)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data.Search);
            dataMovies = data.Search;
        })
        .catch(err => console.log(err))
    console.log(dataMovies)

    return dataMovies;   
}

export const getByYear = async (Year, txtBuscar) => {
    const apiKey = 'd489d640';
    let dataMovies;

  await fetch(`https://www.omdbapi.com/?y=${Year}&s=${txtBuscar}&apiKey=${apiKey}`)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            dataMovies = data.Search;
        })
        .catch(err => console.log(err))
    console.log(dataMovies)

    return dataMovies;   
}

export const getById = async (id) => {
    const apiKey = 'd489d640';
    let dataMovies;

  await fetch(`https://www.omdbapi.com/?i=${id}&apiKey=${apiKey}`)
        .then(function(res){
            return res.json();
        })
        .then(function(data){           
            dataMovies = data;
        })
        .catch(err => console.log(err))
    

    return dataMovies;   
}