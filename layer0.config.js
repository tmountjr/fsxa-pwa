// Learn more about this file at https://docs.layer0.co/guides/layer0_config
module.exports = {
  routes: './layer0/routes.js',
  connector: '@layer0/nuxt',
  backends: {
    origin: {
      domainOrIp: 'https://irvin-garcia-fsxa-pwa-default.layer0-limelight.link',
      hostHeader: 'https://irvin-garcia-fsxa-pwa-default.layer0-limelight.link',
      // Disable backend SSL certificate security check, read more on:
      // https://docs.layer0.co/guides/layer0_config#:~:text=browser%20is%20used.-,disableCheckCert,-Boolean
      disableCheckCert: true
    }
  },

  // The name of the site in Layer0 to which this app should be deployed.
  name: 'fsxa-pwa'

  // The name of the team in Layer0 to which this app should be deployed.
  // team: 'my-team-name',

  // Overrides the default path to the routes file. The path should be relative to the root of your app.
  // routes: 'routes.js',

  // The maximum number of URLs that will be concurrently prerendered during deployment when static prerendering is enabled.
  // Defaults to 200, which is the maximum allowed value.
  // prerenderConcurrency: 200,

  // A list of glob patterns identifying which source files should be uploaded when running layer0 deploy --includeSources.
  // This option is primarily used to share source code with Layer0 support personnel for the purpose of debugging. If omitted,
  // layer0 deploy --includeSources will result in all files which are not gitignored being uploaded to Layer0.
  //
  // sources : [
  //   '**/*', // include all files
  //   '!(**/secrets/**/*)', // except everything in the secrets directory
  // ],

  // Allows you to include additional resources in the bundle that is deployed to Layer0’s serverless JS workers.
  // Keys are globs, value can be a boolean or string. This is typically used to ensure that resources
  // that need to be dynamically required at runtime such as build manifests for server-side rendering
  // or other config files are present in the cloud.
  //
  // includeFiles: {
  //   'lang/**/*': true, // Just includes the specified files
  //   'content/**/*': 'another/dir/in/layer0/lambda', // Copies the files into specific directory within Layer0 build
  // },

  // Set to true to include all packages listed in the dependencies property of package.json when deploying to Layer0.
  // This option generally isn't needed as Layer0 automatically includes all modules imported by your code in the bundle that
  // is uploaded during deployment
  //
  // includeNodeModules: true,
}
