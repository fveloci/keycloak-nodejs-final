var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: false,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    //realmPublicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtl0tSFk5Lo3ph9r+xNtOJzfaY5NLn/yK5bBvi1M+jnQstNE4AR0OSWiokec+OKFLLLjLbkCsHSysds36LcVNR3jD2vTJ9IkokLjEF5NaIDA5OKLCIbj85MGfKgpkoqabi37jnr3+v4hGdjf2HwwH+/uAO6LabvQW9Eh04gyCn5/lQ/Ucezv82u2pAww46X9wcB3IJypA3PwKk64lOhO0UCf5bYx15MsFyx90Wad77yUXSnI3HhImyqJjZygDxDdI3B+/AAEVsQpZkjK4jfxSU7EOyhCsb66aNwSomMYhGt6Hly1bZuGLYCOfTCr5j4zNDA9kfwNhmAg6vMEEg0ZhSQIDAQAB',
    credentials: {
        secret: '621b977f-1ee4-40a2-a121-0e28a3a1be7e'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};