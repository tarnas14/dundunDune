import test from 'tape'
import game from './reducer'
import actions from './actions'

test('should initialize new game', t => {
  const expectedGameState = {
    map: {
      size: {width: 256, height: 256}
    }
  }

  const options = {size: {width: 256, height: 256}}

  t.deepEqual(game({some: 'state'}, actions.init(options)), expectedGameState)
  t.end()
})
