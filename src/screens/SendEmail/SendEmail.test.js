const {datamovie} = require('./SendEmail');


//hace prueba si obtubo el datos de la pelicula 
//con el id del parametro 
test('no debe de retornar undefined', ()=>{
    const data = datamovie('4');
    expect(data).toBeDefined();
})
