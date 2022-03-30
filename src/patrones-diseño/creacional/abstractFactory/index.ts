import Publisher from './class/Publisher';
import FacebookFactory from './factories/facebook/FacebookFactory';
import LinkedinFactory from './factories/linkedin/LinkedinFactory';
import SlackFactory from './factories/slack/SlackFactory';

export const instanciaAbstractFactory = () => {
    console.log('Se necesita Publicar un mensaje ');
    console.log('en las distintas redes sociales y canales de chat.');

    console.log(`
    *   Facebook
    *   Linkedin
    *   Slack
    `)

    /**
     * Reto
        el reto que se presenta es que para cada canal de publicacion 
        se tiene mas de una clase
        *   una clase de conexion
        *   una clase de publicacion
     */
    const mensaje = 'este es el mensaje que enviara el cliente';
    const publisher = new Publisher(mensaje);

    publisher.send(new FacebookFactory());
    console.log('')
    console.log('')
    publisher.send(new LinkedinFactory());
    console.log('')
    console.log('')
    publisher.send(new SlackFactory());
    console.log('')
    console.log('')

}