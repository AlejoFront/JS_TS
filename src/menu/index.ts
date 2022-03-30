import { executeManejoErrores } from '../manejo-errores/';
import { executePatronesDisenio } from '../patrones-diseño/index';
import { asincronia } from '../patrones-asincronos/';

export const Menu = (opt: number) => {
    console.log('****************************');
    console.log('** 1. Manejo de Errores   **');
    console.log('** 2. Patrones Asincronos **');
    console.log('** 3. Patrones Diseño     **');
    console.log('****************************');
    console.log('')

    switch (opt) {
        case 1:
            return executeManejoErrores();
        case 2:
            return asincronia();
        case 3:
            return executePatronesDisenio();
        default:
            break;
    }

}