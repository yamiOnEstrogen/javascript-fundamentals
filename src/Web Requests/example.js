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