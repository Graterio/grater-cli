import {expect, test} from '@oclif/test'

describe('endpointData', () => {
  test
  .stdout()
  .command(['endpointData'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['endpointData', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
