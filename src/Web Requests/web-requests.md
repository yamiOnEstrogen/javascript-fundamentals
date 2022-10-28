# Learn Javascript

## Web Requests

__  __

## Explanation

Web requests are a way to make HTTP requests to a server. This is useful for getting data from a server or sending data to a server.


| Type | Description |
| :--- | :--- |
| `GET` | Requests data from a specified resource. |
| `POST` | Submits data to be processed to a specified resource. |
| `PUT` | Replaces all current representations of the target resource with the uploaded content. |
| `DELETE` | Deletes the specified resource. |
| `HEAD` | Same as GET, but without the response body. |
| `OPTIONS` | Returns the HTTP methods that the server supports for the specified URL. |
| `PATCH` | Used to apply partial modifications to a resource. |

## Example

```javascript

const axios = require('axios');


async function getExample() {
    const response = await axios.get('https://example.com');
    return response.data;
}

async function postExample() {
    const response = await axios.post('https://example.com', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    });
    return response.data;
}

async function putExample() {
    const response = await axios.put('https://example.com', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    });
    return response.data;
}


async function deleteExample() {
    const response = await axios.delete('https://example.com');
    return response.data;
}


async function headExample() {
    const response = await axios.head('https://example.com');
    return response.data;
}

async function patchExample() {
    const response = await axios.patch('https://example.com', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    });
    return response.data;
}

```