import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";





describe('pruebas en el nombre del componente', () => { 

    const title = 'warzone';
    const url   = 'https://war-zone.com/ghodt.jpg';
    

    test('debe de hacer match con el snapshot', () => { 
        
           const { container } = render( <GifItem title= { title } url={ url }/>);
           expect ( container ).toMatchSnapshot();


     });

     test('debe de mostrar la imagen con el url y el ALTernativo indicado ', () => { 
        
        render( <GifItem title= { title } url={ url }/>);
        // screen.debug(); // esto es todo el objecto que renderiza
        // console.log(screen.getByRole('img').alt) //aqui trae ek atributo alternativo
        //console.log(screen.getByRole('img').src) // trae el https:// de la imagen lo vemos en consola
        
        
        // expect( screen.getByRole('img').src).toBe ( url );
        // expect( screen.getByRole('img').alt).toBe ( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );



      });

      test('Debe de mostrar el titulo en el componente ', () => { 
        
        render( <GifItem title= { title } url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();

       })


 });