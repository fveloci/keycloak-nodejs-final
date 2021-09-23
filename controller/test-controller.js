var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak()


router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
});
router.get('/user', keycloak.protect('user'), function(req, res){
    let data = setUserFunction(req)
    res.json({
        route: 'User ROUTE',
        data
    })
});

router.get('/admin', keycloak.protect('admin') , function(req, res){    
    let data = setUserFunction(req)
    res.json({
        route: 'Admin ROUTE',
        data
    })   
});

router.get('/all-user', keycloak.protect(['user','admin']) , function(req, res){
    let data = setUserFunction(req)
    res.json({
        route: 'All User ROUTE',    
        data
    })    
});

const setUserFunction = (req) => {
    const response = req.kauth.grant.access_token.content;
    let data = {
        id: response.sid,
        username: response.preferred_username,
        email_verified: response.email_verified,
        roles: response.resource_access['nodejs-microservice'].roles,
    }    
    return data
}

module.exports = router;