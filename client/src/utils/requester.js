export const requester = async (method, url, data, authToken) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (authToken) {
        options.headers['X-Authorization'] = authToken;
    }

    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return response;
    }

    const result = await response.json();
    return result;
}