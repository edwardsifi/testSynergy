const {addToCollectionTest} = require('./Home');

test('no debe de retornar undefined', ()=>{
    const data = addToCollectionTest({id:9999});
    expect(data).toBeDefined();
})
