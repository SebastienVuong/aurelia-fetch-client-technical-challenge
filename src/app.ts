import {DataLoader} from "./datafetch.ts";

export class App {
    users: any; // TO BE ADJUSTED
    
    constructor() {
        this.users = [];
        DataLoader.fetchData()
            .then(data => {
                console.log('DATA :', data)
                /*
                refinedData = data.map(user => {
                    var refinedOutput = {
                        gender: user.gender,
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    };
                    return refinedOutput;
                });
                */    
                this.users = refinedData;
            });
    }
}