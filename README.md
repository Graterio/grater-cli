grater-cli
==========

CLI Interface to Grater.io

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/grater-cli.svg)](https://npmjs.org/package/grater-cli)

[![CircleCI](https://circleci.com/gh/masiamj/grater-cli/tree/master.svg?style=shield)](https://circleci.com/gh/masiamj/grater-cli/tree/master)

[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/masiamj/grater-cli?branch=master&svg=true)](https://ci.appveyor.com/project/masiamj/grater-cli/branch/master)
[![Codecov](https://codecov.io/gh/masiamj/grater-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/masiamj/grater-cli)
[![Downloads/week](https://img.shields.io/npm/dw/grater-cli.svg)](https://npmjs.org/package/grater-cli)
[![License](https://img.shields.io/npm/l/grater-cli.svg)](https://github.com/masiamj/grater-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g grater-cli
$ grater COMMAND
running command...
$ grater (-v|--version|version)
grater-cli/1.1.0 darwin-x64 node-v10.0.0
$ grater --help [COMMAND]
USAGE
  $ grater COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grater endpointData CANONICALNAME FIELDS`](#grater-endpoint-data-canonicalname-fields)
* [`grater help [COMMAND]`](#grater-help-command)
* [`grater info`](#grater-info)

## `grater endpointData CANONICALNAME FIELDS`

index query on an Endpoint

```
USAGE
  $ grater endpointData CANONICALNAME FIELDS

ARGUMENTS
  CANONICALNAME  canonicalName of the endpoint to query
  FIELDS         comma-separated list of fields to return

OPTIONS
  -f, --first=first  how many documents to return
  -h, --help         show CLI help
  -s, --skip=skip    how many documents to skip
```

_See code: [src/commands/endpointData.ts](https://github.com/Graterio/grater-cli/blob/v1.1.0/src/commands/endpointData.ts)_

## `grater help [COMMAND]`

display help for grater

```
USAGE
  $ grater help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_

## `grater info`

view Grater.io Endpoint info

```
USAGE
  $ grater info

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/info.ts](https://github.com/Graterio/grater-cli/blob/v1.1.0/src/commands/info.ts)_
<!-- commandsstop -->
