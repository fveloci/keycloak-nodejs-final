# keycloak-nodejs-final

Para solicitar el token al servidor de keycloak se llama al endpoint 

POST http://localhost:8080/auth/realms/Demo-Realm/protocol/openid-connect/token
y se envian los siguientes datos por el body en x-www-form-urlencoded

- grant_type: password
- client_id: nodejs-microservice
- client_secret: 621b977f-1ee4-40a2-a121-0e28a3a1be7e
- username: {un usuario registrado}
- password: {contraseña de ese usuario}

## ENDPOINT PROPIOS DE LA APLICACIÓN DE NODE (todos deben recibir un Bearer Token)

Cada endpoint devuelve la ruta a la que se está accediendo, el nombre del usuario correspondiente al token, su id y los roles correspondientes a ese usuario.

GET http://localhost:3000/test/anonymous

Devuelve: 

"Hello Anonymous"

GET http://localhost:3000/test/user 
Devuelve:
```json
{
    "route": "User ROUTE",
    "data": {
        "id": "410b4b91-ae07-4225-ac5d-42e5f26ffd27",
        "username": "employee1",
        "email_verified": true,
        "roles": [
            "user"
        ]
    }
}
```

GET http://localhost:3000/test/admin

Devuelve: 
```json
{ 
    "route": "Admin ROUTE",
    "data": {
        "id": "50e7e9f8-1442-4601-b134-1b65b576083b",
        "username": "employee2",
        "email_verified": true,
        "roles": [
            "admin"
        ]
    }
}

```


GET http://localhost:3000/test/all-user

Devuelve: 
```json

{
    "route": "All User ROUTE",
    "data": {
        "id": "1277a8c8-1cdf-4160-9900-976fc84bd890",
        "username": "employee3",
        "email_verified": true,
        "roles": [
            "admin",
            "user"
        ]
    }
}

```
