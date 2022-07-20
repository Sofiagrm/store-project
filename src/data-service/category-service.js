const CATEGORIES_SERVICE_ENDPOINT = "http://localhost:8081/api/categories/";

export async function getCategories () {
    try {
        const resp = await fetch(CATEGORIES_SERVICE_ENDPOINT, { method : 'GET' });
        const json_response = await resp.json();

        let data = {data : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function getCategory (ref) {
    try {
        console.log(ref);
        const resp = await fetch(CATEGORIES_SERVICE_ENDPOINT + ref , { 
                                    method: 'GET', 
                                });

        const json_response = await resp.json();

        let data = {category : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function removeCategory (ref) {
    try {
        console.log(ref);
        const resp = await fetch(CATEGORIES_SERVICE_ENDPOINT + ref , { 
                                    method: 'DELETE', 
                                });

        const json_response = await resp.json();


        return [json_response];
    } catch (err) {
        console.error(err);
    }
}

export async function insertCategory (cat) {
    try {
        console.log(JSON.stringify(cat));
        const resp = await fetch(CATEGORIES_SERVICE_ENDPOINT, { 
                                    method: 'POST', 
                                    body: JSON.stringify(cat), 
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

export async function updateCategory (cat) {
    try {
        let category = {
            catref: cat.catref,
            designation: cat.catdesignation
        }

        console.log(JSON.stringify(category));
        const resp = await fetch(CATEGORIES_SERVICE_ENDPOINT, { 
                                    method: 'PUT', 
                                    body: JSON.stringify(category), 
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