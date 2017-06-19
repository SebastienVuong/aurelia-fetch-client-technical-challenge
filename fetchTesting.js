// import {DataLoader} from "/src/datafetch.ts";
// const DataLoader = require('./src/datafetch.ts');

// DataLoader.datafetch()
//     .then(data => {
//         console.log(data)
//         /* 
//         let refinedData = data.map(user => {
//             return {
                
                
//             }
//         });
//         */
//     });


const HttpClient = require('aurelia-fetch-client');

// const httpClient = new HttpClient();
const url = "https://randomuser.me/api/?results=50"

const fetch = require('node-fetch')


console.log('fetchData()')
// httpClient.fetch(url)
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data, '<== DATA')
        var refinedData = data.map(user => {
            var refinedOutput = {
                gender: user.gender,
                name: user.name,
                email: user.email,
                picture: user.picture
            };
            return refinedOutput;
        });
        console.log(refinedData, '<== REFINED DATA')
        return refinedData;
    })
    .catch(err => {
        console.log('fetchData failed')
        throw new Error(err);
    });
