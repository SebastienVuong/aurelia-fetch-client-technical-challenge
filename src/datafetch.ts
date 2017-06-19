import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

export class DataLoader {
    // Variable declarations
    let url: string;

    constructor() {
        
    }
    
    // Http Client declaration
    const client = new HttpClient();
    const dataSize = 20;
    const url = `https://randomuser.me/api/?results=${dataSize}` 
    /* 
    Uselessly fetching everything ATM:
    Could narrow down to fields we want to increase performance once finalized. 
    */
    
    // Data Fetcher
    function fetchData() {
        console.log('fetchData()')
        return client.fetch(url)
            .then(res => res.json())
            .catch(err => {
                console.log('fetchData failed')
                throw new Error(err);
            })
    }
}