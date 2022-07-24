export async function getProducts (url) {
    try {
        const resp = await fetch(url, { method : 'GET' });
        const json_response = await resp.json();

        let data = {data : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function getProductsByCategory (catref) {
    try {
        const resp = await fetch('http://localhost:8081/api/products/cat/' + catref , { 
                                    method: 'GET', 
                                });

        const json_response = await resp.json();

        let data = {data : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function getProduct (ref) {
    try {
        const resp = await fetch('http://localhost:8081/api/products/' + ref , { 
                                    method: 'GET', 
                                });

        const json_response = await resp.json();

        let data = {product : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function removeProduct (ref) {
    try {
        const resp = await fetch('http://localhost:8081/api/products/' + ref , { 
                                    method: 'DELETE', 
                                });

        const json_response = await resp.json();

        return [json_response];
    } catch (err) {
        console.error(err);
    }
}

export async function insertProduct (product) {
    try {
        const resp = await fetch('http://localhost:8081/api/products/', { 
                                    method: 'POST', 
                                    body: JSON.stringify(product), 
                                    headers: {
                                        'Content-Type': 'application/json'
                                    } 
                                });

        const json_response = await resp.json();
 
        return [json_response];
    } catch (err) {
        console.error(err);
    }
}

export async function updateProduct (product) {
    try {
        const resp = await fetch('http://localhost:8081/api/products/', { 
                                    method: 'PUT', 
                                    body: JSON.stringify(product), 
                                    headers: {
                                        'Content-Type': 'application/json'
                                    } 
                                });

        const json_response = await resp.json();
        
        return [json_response];
    } catch (err) {
        console.error(err);
    }
}