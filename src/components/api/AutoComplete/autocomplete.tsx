'use server';

export default async function search(query: string) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`
    const responses = await fetch(url);

    const data = await responses.json(); 

    if(data!.results) {
        const results = await data.results.map((result: any) => ({
        name: result.name,
        zip: result.postcodes,
        state: result.admin1,
        country: result.country
        }));
        
        console.log(results);
        return results;
    }
}