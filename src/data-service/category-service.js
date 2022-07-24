const CATEGORIES_SERVICE_ENDPOINT = "http://localhost:8081/api/categories/";

export async function getCategories () {
    try {
        let categories_resp = await fetch(CATEGORIES_SERVICE_ENDPOINT, { method : 'GET' });
        let stocks_resp = await fetch(CATEGORIES_SERVICE_ENDPOINT + "stocks/bycat", { method : 'GET' });

        let categories = await categories_resp.json();
        let stocks = await stocks_resp.json();

        let stocks_map = {}
        
        stocks.forEach((value, index) => {
            stocks_map[value.prodCat_fk] = value.stock;
        });

        categories.map((value, index) => {
            value.stock = stocks_map[value.catref] ? stocks_map[value.catref] : 0;
            categories[index] = value;
        });

        let data = {data : categories};

        return [data];
    } catch (err) {
        console.error(err);
    }
}

export async function getCategory (ref) {
    try {
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
            designation: cat.designation
        }

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