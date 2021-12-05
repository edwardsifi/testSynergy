const { callApi, getByYear, getById } = require('./services');

//hace pruebas de las peticiones a la api
test('no debe de retornar undefined', ()=>{
    const data = callApi('her');
    expect(data).toBeDefined();
})

test('no debe de retornar undefined', ()=>{
    const data = getByYear('2013','her');
    expect(data).toBeDefined();
})

test('no debe de retornar undefined', ()=>{
    const data = getById('tt0091167','her');
    expect(data).toBeDefined();
})