const api_url = 'https://h5yymqie2b.execute-api.us-east-2.amazonaws.com/Testing/';

async function getSteamId(user: String) {
  let result = await fetch(`${api_url}/getSteamUserId?name=${user}&format=json`);
  return await result.json();
}

async function getGameList(userId: String) {
  let result = await fetch(`${api_url}/getSteamGames?id=${userId}&format=json&include_appinfo=1`);
  return await result.json();
}

export {getSteamId, getGameList};