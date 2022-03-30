import { IAbstractFactory, IConnector, IPublisher } from '../../interfaces/interface';
import LinkedinConnector from './LinkedinConnector';
import LinkedinPublisher from './LinkedinPublisher';

export default class LinkedinFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new LinkedinConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new LinkedinPublisher(connector);
    }
}