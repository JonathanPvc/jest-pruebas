import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en el hook de nuestro UseFetchGifs', () => {

    test('debe de regresar el estado incial ', () => {
        //const{ images, isLoading } = useFetchGifs();

        const { result } = renderHook(() => useFetchGifs('FallGuys'))
        //console.log(result);
        const { images, isLoading } = result.current;


        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


    });

    test('debe de regresar el estado incial ', async() => {

        const { result } = renderHook(() => useFetchGifs('FallGuys'));

        await waitFor(
            ()=> expect(result.current.images.length ).toBeGreaterThan( 0 )

        );

        const{ images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    });
    
});