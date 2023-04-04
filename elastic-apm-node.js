require('elastic-apm-node').start({
  serviceName: 'teste-em-prod-aqui',
  serverUrl:
    'https://7e90c033dd2e4c5dadef1a305f18fc7b.apm.us-east-2.aws.elastic-cloud.com:443',
  secretToken: '6tvaQVyhQ2g5eUHDrO',
});
