import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe(' Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor en la caja de texto el imput', () => { 
        
        render( <AddCategory onNewCategory ={ ( ) => {} } /> );

        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input,{ target: { value : 'Warzone' } } )
         //screen.debug();
         expect( input.value ).toBe('Warzone')
     });

     test('debe de llamar onNerCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Warzone';
        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory = { onNewCategory }  /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input,{ target: { value : inputValue } } )
        //screen.debug();
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect(onNewCategory).toHaveBeenCalledWith( inputValue );
      });


      test('no debe de llamar el onNewCategory si el input esta vacio ', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory = { onNewCategory }  /> );

        const form  = screen.getByRole('form');
        fireEvent.submit( form );

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

      });




});


