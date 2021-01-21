'use strict';

const Homey = require('homey');
const { ManagerSettings } = require('homey');
const { ManagerApi } = require('homey');
const http = require('http.min');

let SessionToken = -1;

class digitalStromBridge extends Homey.App {
    /**
    * onInit is called when the app is initialized.
    */
    async onInit() {    
        this.log('digitalStromBridge has been initialized');
        // disable SSL for DSServer communication
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        this.authenticate();
    }

    getSessionToken() {
        return this.SessionToken;
    }

    setSessionToken(token) {
        this.SessionToken = token;
    }

    authenticate() {
        this.log('Requesting new token to DSS.')
        this.setSessionToken(this.askForSessionToken());
    }

    async askForSessionToken(){
        let dss_ip = ManagerSettings.get('dss_ip');
        let app_token = ManagerSettings.get('app_token');
        let url = "https://" + dss_ip + ":8080/json/system/loginApplication" 
                    + "?loginToken=" + app_token; 

        this.log("GET " + url);
        
        return http(url)
        .then(function (result){
            if(result.response.statusCode = 200){
                console.log("Token recieved!");
                return JSON.parse(result.data)["result"]["token"];
            }
        })
        .catch(function (error){
            console.log(error);
        });
    }

}


module.exports = digitalStromBridge;
