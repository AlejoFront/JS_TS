import { VideoProxy } from './videoProxy';
import { YouTubeApi } from './youtubeApi';

export const instanciaProxy = () => {
    const proxy = new VideoProxy(new YouTubeApi());
    console.log('Async Espere 3s');
    (async () => {
        // first time
        await getPlayList();

        // second time (cache)
        await getPlayList();
    })();

    async function getPlayList() {
        const startDate = new Date();

        await proxy.getPlayList('courses');

        const endDate = new Date();

        console.log(`Process completed on ${(endDate.getTime() - startDate.getTime()) / 1000} seconds`)
    }
}