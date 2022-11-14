'use strict'
// This file was automatically added by layer0 init.
// You should commit this file to source control.
// Learn more about this file at https://docs.layer0.co/guides/layer0_config
module.exports = {
  connector: '@layer0/nuxt',
  includeNodeModules: true,
  // includeFiles: require('./getNodeModules.js')
  backends: {
    api: {
      domainOrIp: 'demos-fsxa-api-server-default.layer0-limelight.link',
      hostHeader: 'demos-fsxa-api-server-default.layer0-limelight.link'
    }
  }
}
