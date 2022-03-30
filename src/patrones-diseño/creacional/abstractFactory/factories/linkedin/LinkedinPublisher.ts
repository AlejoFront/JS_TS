import { IPublisher, IConnector } from '../../interfaces/interface';

export default class LinkedinPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Linkedin
        console.log("Linkedin");
        console.log(content);
    }
}