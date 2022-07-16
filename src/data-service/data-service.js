export async function callService (url) {
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
    try {
        const resp = await fetch(url, { "method": "GET" });
        const json_response = await resp.json();
        return [json_response];
    } catch (err) {
        console.error(err);
    }
}

export async function getProducts (url) {
    //fetch("https://kitsu.io/api/edge/anime/10", {"method": "GET"})
    try {
        const resp = await fetch(url, { "method": "GET" });
        const json_response = await resp.json();

        let data = {data : json_response};

        return [data];
    } catch (err) {
        console.error(err);
    }
}