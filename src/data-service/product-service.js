export async function getProducts (url) {
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
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
        console.log(catref);
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
        console.log(ref);
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
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
    try {
        console.log(ref);
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
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
    try {
        console.log(JSON.stringify(product));
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
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
    try {
        console.log(JSON.stringify(product));
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