import {DataLoader} from "./datafetch";

export class App {
    users: Array<Object>;
    
    constructor() {
        this.users = [];
        DataLoader.fetchData()
            .then(data => {
                let refinedData = data.results.map(user => {
                    var refinedOutput = {
                        login: user.login,
                        gender: user.gender,
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    };
                    return refinedOutput;
                });
                
                // Capitalizing first letter
                refinedData.forEach((user,idx) => {
                    refinedData[idx].name.first = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
                    refinedData[idx].name.last = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
                    refinedData[idx].name.title = user.name.title.charAt(0).toUpperCase() + user.name.title.slice(1);
                })
                /*Repeted functionality, would usually write a function to capitalize the first letter*/
                
                this.users = refinedData;
            });
    }
}