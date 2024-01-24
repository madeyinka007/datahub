const baseUrl = "http://localhost:3001"

export const postData = async (url, data) => {
    const response = await fetch(baseUrl + url, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    return response.json()
}

export const getData = async (url) => {
    const response = await fetch(baseUrl + url)
    return response.json()
}