import INotification from './providers/interface';
import FacebookNotification from './providers/facebookNotification';
import SlackAdapterNotification from './providers/SlackAdapterNotification';
import SlackNotification from './providers/SlackNotification';
import NotificationService from './services/NotificationService';

export const instanciaAdapter = () => {
    const providers: INotification[] = [
        new FacebookNotification(),
        new SlackAdapterNotification(
            new SlackNotification()
        )
    ];

    const notificationService = new NotificationService(providers);
    notificationService.post("Nuevo curso", "25% descuentos a los 10 primeros en inscribirse.");
}