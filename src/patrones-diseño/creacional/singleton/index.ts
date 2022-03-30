import { SingletonUno } from './singleton01';

export const instanciaSingleton01 = () => {
    const instancia1 = new SingletonUno('Iroman');
    const instancia2 = new SingletonUno('Iroman');
    console.log(`Nombre de la instancia1 es: ${instancia1.getName}`)
    console.log(`Nombre de la instancia2 es: ${instancia2.getName}`)
    console.log(`crea una unica instancia de una clase, y sera global esa instancia.`)
}