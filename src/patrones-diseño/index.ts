import { instanciaSingleton01 } from './creacional/singleton';
import { instanciaFactory } from './creacional/factory/';
import { instanciaAbstractFactory } from './creacional/abstractFactory/index';
import { instanciaCommand } from './comportamiento/command/';
import { instanciaOberver } from './comportamiento/observer/';
import { instanciaStrategy } from './comportamiento/strategy/';
import { instanciaAdapter } from './estructurales/adapter/';
import { instanciaDecorador } from './estructurales/decorador/';
import { instanciaProxy } from './estructurales/proxy/index';

export const executePatronesDisenio = () => {
    console.log('*********************************************************');
    console.log('****************** 3. Patrones Diseño   *****************');
    console.log(' ');
    console.log('++++++++++++++++++ * Singleton          +++++++++++++++++');
    console.log(' ');
    instanciaSingleton01();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Factory          +++++++++++++++++');
    console.log(' ')
    instanciaFactory();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Abstract Factory +++++++++++++++++');
    console.log(' ');
    instanciaAbstractFactory();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Command ++++++++++++++++++++++++++');
    console.log(' ');
    instanciaCommand();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Observer +++++++++++++++++++++++++');
    console.log(' ');
    instanciaOberver();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Estrategy ++++++++++++++++++++++++');
    console.log(' ');
    instanciaStrategy();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Adapter ++++++++++++++++++++++++++');
    console.log(' ');
    instanciaAdapter();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Decorador ++++++++++++++++++++++++');
    instanciaDecorador();
    console.log(' ');
    console.log(' ');
    console.log('++++++++++++++++++ * Proxy  +++++++++++++++++++++++++++');
    console.log(' ');
    instanciaProxy();
    console.log(' ');
    console.log(' ');
    console.log('*********************************************************');


}