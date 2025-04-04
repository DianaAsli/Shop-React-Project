export const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;

    // return Object.values(result);
    
}