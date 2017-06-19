import {DataLoader} from "./datafetch.ts";

export class App {
    users: any;
    
    constructor() {
        this.users = [];
        DataLoader.fetchData()
            .then(data => {
                console.log('DATA :', data)
                let refinedData = data.map(user => {
                    var refinedOutput = {
                        gender: user.gender,
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    };
                    return refinedOutput;
                });
                this.users = refinedData;
            });
    }
}