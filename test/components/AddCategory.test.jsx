import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe(' Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor en la caja de texto el imput', () => { 
        
        render( <AddCategory onNewCategory ={ ( ) => {} } /> );

        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input )
         screen.debug();
     });
});


