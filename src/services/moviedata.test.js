const moviedata = require('./moviedata.json');

//prueba si los datos iniciales
test('no debe de retornar undefined', ()=>{
    expect(moviedata).toBeDefined();
})