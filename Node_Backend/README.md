# 👻 Node Backend 👻
This document defines the API endpoints available in the Node Back-End of the *Image Recognition* Project.

## Regular Endpoints
Regular Endpoints are those used in the data exchange between the Android client and the Node Back-End

### POST /api/init
Initiates a new user (if no token is present) or receives back a returning user.

| Param |Required?  |Description  |
|:--|:--:|:--|
| token | N | User access Token, as provided. *Hexadecimal string.* |
| name | Y | User name. *string* |
