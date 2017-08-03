import test from 'tape-promise/tape'
import Rx from 'rxjs'
import game, {addSpice, getPlayerInfo, addPlayer} from '../src/game'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

// rxjs subject tests (I'm learning
test('rxjs subject allows only lambda in subscription', t => new Promise(resolve => {
  const subject = new Rx.Subject()

  subject.subscribe(v => {
    t.equal(v, 'HA')
    t.end()
    resolve()
  })

  subject.next('HA')
}))

test('rxjs subject allows filtering', t => new Promise(resolve => {
  const subject = new Rx.Subject()

  subject.filter(thing => thing === 'HAHA').subscribe(v => {
    t.equal(v, 'HAHA')
    t.end()
    resolve()
  })

  subject.next('HA')
  subject.next('HAHA')
}))

// actual game tests
test('game should return player data', t => new Promise((resolve, reject) => {
  const subject = new Rx.Subject()
  const initialState = { }

  delay(200).then(() => reject('player info response not found'))

  game(initialState)(subject)

  subject.filter(c => c.type === 'PLAYER_INFO_RESPONSE').subscribe(v => {
    t.equal(v.spice, 200)
    t.end()
    resolve()
  })

  subject.next({type: 'ADD_PLAYER', id: 'player1'})
  subject.next({type: 'GET_PLAYER_INFO', id: 'player1'})
}))

test('getPlayerInfo should publish correct response', t => {
  // given
  const events = []
  const mockPub = event => events.push(event)
  const getState = () => ({
    players: [
      {
        id: 'player1',
        spice: 200
      }
    ]
  })

  // when 
  getPlayerInfo(getState, mockPub)({id: 'player1'})

  // then
  t.equal(events.length, 1)
  t.equal(events[0].spice, 200)
  t.end()
})

test('addPlayer should add player to state without any data', t => {
  let state = {}
  const mockSetState = setter => state = setter(state)

  addPlayer(mockSetState)({id: 'player1'})

  t.deepEqual(state, {
    players: [
      {
        id: 'player1'
      }
    ]
  })
  t.end()
})

test('addPlayer should add initial spice to the new player', t => {
  const events = []
  const mockPub = event => events.push(event)

  addPlayer(() => {}, mockPub)({id: 'player1'})

  t.equal(events.length, 1)
  const event = events[0]
  t.equal(event.type, 'ADD_SPICE')
  t.equal(event.playerId, 'player1')
  t.equal(event.spice, 200)
  t.end()
})

test('addSpice should add spice to player', t => {
  let state = {
    players: [
      {
        id: 'player1',
        spice: undefined
      }
    ]
  }
  const mockSetState = setter => state = setter(state)

  addSpice(mockSetState)({playerId: 'player1', spice: 200})

  const player = state.players[0]
  t.equal(player.spice, 200)
  t.end()
})
