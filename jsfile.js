// refactoring domjsfile // 5.17.22
// 

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search nbaPlayers.json and filter it
const searchEvents = async searchText => {
    const resp = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/players.json');
    const players = await resp.json();

    const respTwo = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json');
    const teams = await respTwo.json();
    
    //const getTeams = teams.reduce((teamsMap, team) => {
    //    const newPlayer = {...playersMap, [players.teamID]: players}
    //    const newTeam = {...teamsMap, players: [team.teamId], name: [team.teamName] }
    //    console.log(newTeam)
    //    return newTeam
    //}, {});

    //tomorrow, convert teams to an object then add append that object to each players playerId
    const getTeams = players.reduce((playersMap, player) => {
        const newPlayer = {...playersMap, players: [player] }
        console.log(newPlayer)
        return newPlayer

    }, {});

    

    
    

};

searchEvents()