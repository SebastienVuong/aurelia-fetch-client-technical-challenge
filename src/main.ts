import {Aurelia} from 'aurelia-framework'
// import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
    
  aurelia.start().then(() => aurelia.setRoot());
}