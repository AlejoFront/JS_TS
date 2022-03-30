
interface Idata {
    id: number,
    title: string,
    year: number
}

export const asincronia = () => {

    const datos: Idata[] = [
        {
            id: 1,
            title: 'Iron Man',
            year: 2008
        }, {
            id: 2,
            title: 'Hulk',
            year: 2018
        }, {
            id: 1,
            title: 'Thor',
            year: 2020
        }
    ]
    // const getDatos = () => {
    //     return datos;
    // }

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datos);
            }, 1500);
        })
    }

    getDatos().then(datos => console.log(datos));

} 