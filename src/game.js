export default initialState => subject => {
  const pub = event => subject.next(event)

  let state = initialState
  const stateOperations = {
    set: setter => state = setter(state),
    get: () => state
  }

  subject.filter(event => event.type === 'GET_PLAYER_INFO').subscribe(getPlayerInfo(stateOperations.get, pub))
  subject.filter(event => event.type === 'ADD_PLAYER').subscribe(addPlayer(stateOperations.set, pub))
  subject.filter(event => event.type === 'ADD_SPICE').subscribe(addSpice(stateOperations.set))
}

export const getPlayerInfo = (getState, pub) => v => pub({
  type: 'PLAYER_INFO_RESPONSE',
  spice: getState().players.find(player => player.id === v.id).spice
})

export const addPlayer = (setState, pub = () => {}) => v => {
  setState(oldState => ({
    ...oldState,
    players: [
      ...(oldState.players || []),
      {
        id: v.id
      }
    ]
  }))
  pub({
    type: 'ADD_SPICE',
    playerId: v.id,
    spice: 200
  })
}

export const addSpice = setState => v => setState(oldState => ({
  ...oldState,
  players: oldState.players.map(player => player.id === v.playerId
    ? {...player, spice: v.spice}
    : player
  )
}))
