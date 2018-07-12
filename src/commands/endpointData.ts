import * as _ from 'lodash'
import * as signale from 'signale'
import {Command, flags} from '@oclif/command'
import api from '../api'
import Environment from '../Environment'
import logger from '../logger'

export default class EndpointData extends Command {
  static description = 'index query on an Endpoint'

  static flags = {
    help: flags.help({char: 'h'}),
    first: flags.integer({
      char: 'f',
      description: 'how many documents to return',
    }),
    skip: flags.integer({
      char: 's',
      description: 'how many documents to skip',
    }),
  }

  static args = [
    {
      description: 'canonicalName of the endpoint to query',
      name: 'canonicalName',
      required: true,
    },
    {
      description: 'comma-separated list of fields to return',
      name: 'fields',
      required: true,
    },
  ]

  async run() {
    const {args, flags} = this.parse(EndpointData)
    const equals = _.times(120, Number).map(() => '=').join('')
    const successEquals = _.times(49, Number).map(() => '=').join('')
    const failedEquals = _.times(51, Number).map(() => '=').join('')

    console.log('\n')
    signale.start(equals)
    signale.pending(`Starting a request to ${Environment.API_HOST}...`)
    signale.pending(`Number of documents: ${flags.first || 10}`)
    signale.pending(`Number to skip: ${flags.skip || 0}`)
    signale.pending(`Endpoint: ${args.canonicalName}`)
    signale.pending(`Fields: ${args.fields}`)

    api.getEndpointData(args.canonicalName, args.fields, flags)
      .then(data => {
        signale.complete(`${equals}\n`)
        signale.success(`${successEquals} SUCCESSFUL RESPONSE! ${successEquals}`)
        console.log('\n')
        console.log(data.data.data)
        console.log('\n')
        logger.logRequestLinks()
      })
      .catch(error => {
        signale.error(`${equals}\n`)
        signale.error(`${failedEquals} FAILED RESPONSE! ${failedEquals}\n`)
        console.log(error.response.data)
        console.log('\n')
        logger.logRequestLinks()
      })
  }
}
