import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import registerServiceWorker from './registerServiceWorker';
// import { getSteamId } from './queries.ts';

const api_url = 'https://h5yymqie2b.execute-api.us-east-2.amazonaws.com/Testing';

async function getSteamId(user) {
  let result = await fetch(`${api_url}/getSteamUserId?name=${user}`);
  return await result.json();
}

async function getGameList(userId) {
  let result = await fetch(`${api_url}/getSteamGames?id=${userId}`);
  return await result.json();
}

async function getGameInfo(gameId) {
  let result = await fetch(`${api_url}/getGameInfo?id=${gameId}`);
  return await result.json();
}

async function main() {
  let id = await getSteamId('Legendaries');
  id = id.response.steamid;
  let games = await getGameList(id);
  games = games.response.games;

  let sethGames = await getGameList('76561198098454365');
  sethGames = sethGames.response.games;

  ReactDOM.render(<MuiThemeProvider>
    <AppBar title='Test'>
    </AppBar>
      <div>Test</div>
      {
        games.filter(game => sethGames.map(g => g.appid).includes(game.appid)).map(game => {
          return <img onClick={() => alert(game.appid)} src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}/>
        })
      }
  </MuiThemeProvider>, document.getElementById('root'));
  registerServiceWorker();
}

main();
