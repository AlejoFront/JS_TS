import { IAbstractFactory, IConnector, IPublisher } from '../../interfaces/interface';
import FacebookConnector from './FacebookConnector';
import FacebookPublisher from './FacebookPublisher';

export default class FacebookFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new FacebookConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new FacebookPublisher(connector);
    }
}