export interface IAbstractFactory {
    getConnector(): IConnector;
    getPublisher(connector: IConnector): IPublisher;
}

export interface IConnector {
    open(): void;
    close(): void;
}

export interface IPublisher {
    publish(content: string): void;
}