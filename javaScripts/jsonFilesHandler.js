export async function importJson(pathToJson) {
    const response = await fetch(pathToJson);
    const jsondata = await response.json();
    return jsondata;
}
