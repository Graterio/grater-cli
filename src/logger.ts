import * as _ from 'lodash'
import * as signale from 'signale'
import Environment from './Environment'

const logRequestLinks = () => {
  const equals = _.times(48, Number).map(() => '=').join('')
  signale.complete(`${equals} GRATER ENDPOINT INFO ${equals}`)
  console.log('\n')
  signale.note(`Private GraphQL API:                    ${Environment.API_HOST}/graphql`)
  signale.note(`Public GraphQL API:                     ${Environment.API_HOST}/public`)
  signale.note(
    `Public REST Endpoint Data Request:      ${Environment.API_HOST}/endpoints/:canonicalName?first=1&skip=1&fields=id,name`,
  )
  signale.note(
    `Public REST Endpoint Data Item Request: ${Environment.API_HOST}/endpoints/:canonicalName/:id?fields=id,name`,
  )
  console.log('\n')
  const doneSuccess = _.times(56, Number).map(() => '=').join('')
  signale.complete(`${doneSuccess} DONE ${doneSuccess}`)
  console.log('\n')
}

export default {
  logRequestLinks
}
