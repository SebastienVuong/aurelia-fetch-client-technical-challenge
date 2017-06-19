import {HttpClient} from 'aurelia-fetch-client';

export class DataLoader {
    // Data Fetcher
    static fetchData() {
        const client = new HttpClient();
        const dataSize = 20;
        const url = `https://randomuser.me/api/?results=${dataSize}`;
        // console.log('fetchData()'); // TRACKER
        return client.fetch(url)
            .then(res => res.json())
            .catch(err => {
                console.log('fetchData failed')
                throw new Error(err);
            });
    }
}