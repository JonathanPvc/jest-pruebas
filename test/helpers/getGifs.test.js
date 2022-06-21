import  { getGifs }   from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => { 
    

    test('debe de retornar un arreglo de gifs', async() => { 
        
            const gifs = await getGifs ( 'elmo' ); //Categoria

            //console.log(gifs);

            expect( gifs.length ).toBeGreaterThan( 0 ); //tengo un arreglo que es mayor a 0
            expect( gifs[0] ).toEqual({

                id    : expect.any( String ),
                title : expect.any( String ),
                url   : expect.any( String ),


            });
     });



 });




















