import {Command, flags} from '@oclif/command'
import logger from '../logger'

export default class Info extends Command {
  static description = 'view Grater.io Endpoint info'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    console.log('\n')
    logger.logRequestLinks()
  }
}
