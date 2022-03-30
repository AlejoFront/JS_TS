import { IAbstractFactory, IConnector, IPublisher } from '../../interfaces/interface';
import SlackConnector from './SlackConnector';
import SlackPublisher from './SlackPublisher';

export default class SlackFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new SlackConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new SlackPublisher(connector);
    }
}