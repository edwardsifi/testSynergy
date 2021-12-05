const {getTestData} = require('./Collections');

//prueba si las peliculas se han guardado en la colleccion
test('no debe de retornar undefined', ()=>{
    const data = getTestData();
    expect(data).toBeDefined;
})