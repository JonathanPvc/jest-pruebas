import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState(''); //estado

    const onInputChange = ({ target }) => {    //metodo submit
        
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        //console.log('HOLA JONATHAN DESDE ONSUBMIT');
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {

        onNewCategory: PropTypes.func.isRequired,

}