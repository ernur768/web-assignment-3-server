# Web assignment 3

site \
https://ernur.proj.kz/

```
admin user
email: ernur@ernur
password: ernur
```

## Authentication

### Register
```
POST
https://light-erin-tunic.cyclic.app/auth/register
```

```
Request body:
{
    "email": "example@mail",
    "password": "example",
    "username": "example"
}
```

```
Response:
{
    "id": "65cbbd5229e86ca2ac7b252e",
    "email": "example@mail",
    "username": "example",
    "role": "user",
    "deletedAt": null,
    "createdAt": "2024-02-13T19:04:50.896Z",
    "updatedAt": "2024-02-13T19:04:50.896Z"
}
```

---

### Login

```
POST
https://light-erin-tunic.cyclic.app/auth/login
```

```
Request body:
{
    "email": "example@mail",
    "password": "example"
}
```

```
Response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2JiZDUyMjllODZjYTJhYzdiMjUyZSIsImVtYWlsIjoiZXhhbXBsZUBtYWlsIiwidXNlcm5hbWUiOiJleGFtcGxlIiwicm9sZSI6InVzZXIiLCJkZWxldGVkQXQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsImlhdCI6MTcwNzg1MTcyOSwiZXhwIjoxNzA3ODUzNTI5fQ.8KBdVcD45XAdZVuo1BXM2taqFg7GbUTg3MpIHpbFiOI",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2JiZDUyMjllODZjYTJhYzdiMjUyZSIsImVtYWlsIjoiZXhhbXBsZUBtYWlsIiwidXNlcm5hbWUiOiJleGFtcGxlIiwicm9sZSI6InVzZXIiLCJkZWxldGVkQXQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsImlhdCI6MTcwNzg1MTcyOSwiZXhwIjoxNzEwNDQzNzI5fQ.I1rKkhdxa2eNd-cc74JUu6np8Vq6SVlpFlOITO-d-b4",
    "user": {
        "id": "65cbbd5229e86ca2ac7b252e",
        "email": "example@mail",
        "username": "example",
        "role": "user",
        "deletedAt": null,
        "createdAt": "2024-02-13T19:04:50.896Z",
        "updatedAt": "2024-02-13T19:04:50.896Z"
    }
}
```
Server will send cookie: `refreshToken`

---

### Refresh

```
GET
https://light-erin-tunic.cyclic.app/auth/refresh
```
Request cookie: `refreshToken`
```
Response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2JiZDUyMjllODZjYTJhYzdiMjUyZSIsImVtYWlsIjoiZXhhbXBsZUBtYWlsIiwidXNlcm5hbWUiOiJleGFtcGxlIiwicm9sZSI6InVzZXIiLCJkZWxldGVkQXQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsImlhdCI6MTcwNzg1MTkyOSwiZXhwIjoxNzA3ODUzNzI5fQ.quPJsc57Xv9RIekXEqLACt3nE2A7EF8Mhj7tAjwPldU",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2JiZDUyMjllODZjYTJhYzdiMjUyZSIsImVtYWlsIjoiZXhhbXBsZUBtYWlsIiwidXNlcm5hbWUiOiJleGFtcGxlIiwicm9sZSI6InVzZXIiLCJkZWxldGVkQXQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMTNUMTk6MDQ6NTAuODk2WiIsImlhdCI6MTcwNzg1MTkyOSwiZXhwIjoxNzEwNDQzOTI5fQ.-PyaS3Wtd2oWXxw3Pq5styAucLjsKsepSaf58G-gJbI",
    "user": {
        "id": "65cbbd5229e86ca2ac7b252e",
        "email": "example@mail",
        "username": "example",
        "role": "user",
        "deletedAt": null,
        "createdAt": "2024-02-13T19:04:50.896Z",
        "updatedAt": "2024-02-13T19:04:50.896Z"
    }
}
```
New refresh token will be set to cookie

---

### Logout
```
POST
https://light-erin-tunic.cyclic.app/auth/logout
```

---

## Users

### Get users
```
GET
https://light-erin-tunic.cyclic.app/users?offset=0&limit=1
```
```
Headers
Authorization: Bearer token
```
```
Response:
[
    {
        "id": "65cbbd5229e86ca2ac7b252e",
        "email": "example@mail",
        "username": "example",
        "role": "user",
        "deletedAt": null,
        "createdAt": "2024-02-13T19:04:50.896Z",
        "updatedAt": "2024-02-13T19:04:50.896Z"
    }
]
```

---

### Update user

```
PUT
https://light-erin-tunic.cyclic.app/users/:id/update
```
```
Headers
Authorization: Bearer token
```

---

### Delete user

```
DELETE
https://light-erin-tunic.cyclic.app/users/:id/delete
```
```
Headers
Authorization: Bearer token
```

---

### Revive deleted user

```
PUT
https://light-erin-tunic.cyclic.app/users/:id/revive
```
```
Headers
Authorization: Bearer token
```

---

## External apis

### Openweather api

```
GET
https://light-erin-tunic.cyclic.app/external-apis/weather?city=nur-sultan
```
```
Headers
Authorization: Bearer token
```
```
Response
{
    "temp": -6.03,
    "description": "snow",
    "icon": "13n",
    "coord": {
        "lon": 71.446,
        "lat": 51.1801
    },
    "feels_like": -13.03,
    "humidity": 86,
    "pressure": 1014,
    "wind_speed": 15,
    "country_code": "KZ"
}
```

---

### Quotes api

```
GET
https://light-erin-tunic.cyclic.app/external-apis/quote
```
```
Headers
Authorization: Bearer token
```
```
Response
{
    "quote": "In the West, you have always associated the Islamic faith 100 percent with Arab culture. This in itself is a fundamentalist attitude and it is mistaken.",
    "author": "Youssou N'Dour"
}
```

---

### Chuck Norris api
```
GET
https://light-erin-tunic.cyclic.app/external-apis/joke
```
```
Headers
Authorization: Bearer token
```
```
Response
{
    "joke": "Chuck Norris and Sasquatch are maternal cousins."
}
```

---
