
export const exampleError01 = () => {
    console.log(' ')
    console.log('+++++++++++++++++++++++++Ejemplo01+++++++++++++++++++++')
    console.log(' ')
    console.log('********Sin errores********')

    try {
        console.log('Try, evalua y ejecuta  el codigo.')
        console.log('Segundo mensaje en el try')
    } catch (error) {
        console.log('Catch, captura el error lanzado por el Try')
    } finally {
        console.log('Finally, se ejecuta siempre sin importar que exista o no un error')
    }
    console.log(' ')
    console.log('********Con errores********')

    try {
        console.log('Try, evalua y ejecuta  el codigo.')
        NaN = 1 // error aproposito
        console.log('Segundo mensaje en el try')
    } catch (error) {
        console.log('Catch, captura el error lanzado por el Try')
    } finally {
        console.log('Finally, se ejecuta siempre sin importar que exista o no un error')
    }
    console.log(' ')
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++')
}

export const exampleError02 = () => {
    console.log(' ')
    console.log('+++++++++++++++++++++++++Ejemplo02+++++++++++++++++++++')
    console.log(' ')
    console.log('********Throw New Error********')
    try {
        let numero = 10;
        if (!isNaN(numero)) {
            throw new Error('No es un numero.');
        }

    } catch (error) {
        console.log(`Se capturo el error: ${error}`)
    }
}