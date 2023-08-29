interface MinetoolsResponse {
    id: string,
    name: string,
    status: boolean | "ERR"
}

async function checkMcUsername(username: string): Promise<MinetoolsResponse> {
    const response: Response = await fetch(`https://api.minetools.eu/uuid/${username}`);
    return await response.json();
}

export default checkMcUsername;