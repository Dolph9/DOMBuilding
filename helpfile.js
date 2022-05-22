//helpfile from ben

const teams = [
    { id: 123, name: 'Magic' },
    { id: 345, name: 'Sixers' },
    { id: 456, name: 'Heat' },
    { id: 567, name: 'Timberwolves' },
  ]
  
  // const teamsByID = {
  //   123: { id: 123, name: 'Magic' },
  //   345: { id: 345, name: 'Sixers' },
  // }
  
  
  const teamsByID = teams.reduce((teamsMap, team) => {
    return { ...teamsMap, [team.id]: team }
  }, {})
  
  const players = [
    { id: 123, teamID: 123, name: 'John' },
  ]
  
  const playersByID = players.reduce((playersMap, player) => {
    const playerWithTeam = { ...player, team: teamsByID[player.teamID] }
    return { ...playersMap, [player.id]: playerWithTeam }
  }, {})
  
  teamsByID[player.teamID].name

  