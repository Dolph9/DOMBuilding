// HI JS :)

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search nbaPlayers.json and filter it
const searchPlayers = async searchText => {
    const resp = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/players.json');
    const players = await resp.json();
    const respTwo = await fetch('https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json');
    const teams = await respTwo.json();

    


    let matches = players.filter(player => {
        const ex = new RegExp(`${searchText}`, 'gi');
        return player.firstName.match(ex) || player.lastName.match(ex);
    });

    let teamMatches = teams.filter(team => {
        const exes = new RegExp(`${searchText}`, 'gi');
        return team.teamName.match(exes) || team.abbreviation.match(exes);
    })
    
    if(searchText.length === 0) {
        matches = [];
        teamMatches = []
        matchList.innerHTML = '';
    }

    outputHtml(matches, teamMatches);
};
const outputHtml = (matches, teamMatches) => {
    if(matches.length > 0 || teamMatches > 0) {
        const html = matches.map(match => `
            <div class ="card card-body mb-1">
            <h4>${match.firstName} ${match.lastName} <span class="text-primary"> 
            <br> Team: ${match.teamId}</span></h4>
            <small> from the nba </small>
            </div>
        `).join('')

        matchList.innerHTML = html;
    }
}


search.addEventListener('input', () => searchPlayers(search.value));