import apm from 'elastic-apm-node';

apm.start({
  serviceName: 'teste-em-aqui',
  serverUrl:
    'https://7e90c033dd2e4c5dadef1a305f18fc7b.apm.us-east-2.aws.elastic-cloud.com:443',
  secretToken: '6tvaQVyhQ2g5eUHDrO',
});
