// refactoring domjsfile // 5.17.22
// Offically refactored on 5.21.22

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchEvents = async searchText => {
    const resp = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/players.json');
    const players = await resp.json();

    const respTwo = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json');
    const teams = await respTwo.json();
    
    const getTeams = teams.reduce((teamsMap, team) => {
        return { ...teamsMap, [team.teamId]: team }
    }, {})

    const getPlayers = players.reduce((playersMap, player) => {
        const playerWithTeam = { ...player, team: getTeams[player.teamId]}
        return { ...playersMap, [player.firstName + player.lastName]: playerWithTeam }
    }, {})
    
    const ify = Object.values(getPlayers);
    console.log(ify)

    let matches = ify.filter(player => {
        const ex = new RegExp(`${searchText}`, 'gi');
        return player.firstName.match(ex) || player.lastName.match(ex);
    });

    if(searchText === undefined || searchText === '') {
        console.log(searchText) //logging what is typed in the console.
        matches = [];
        matchList.innerHTML = '';
    };

    outputHtml(matches)
};
const outputHtml = (matches) => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class ="card card-body mb-1">
            <h4>${match.firstName} ${match.lastName} (${match?.team?.abbreviation}) 
            <span class="text-primary"> 
            <br> Team: ${match?.team?.teamName}</span></h4>
            <h6> Team ID: ${match?.team?.teamId}<h6>
            <h6> Location: ${match?.team?.location}<h6>
            <small> from the nba </small>
            </div>
        `).join('')

        matchList.innerHTML = html;
    };
};

search.addEventListener('input', () => searchEvents(search.value));

searchEvents()