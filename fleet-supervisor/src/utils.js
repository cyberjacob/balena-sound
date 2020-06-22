const { execSync } = require('child_process')

module.exports.getIPAddress = () => {
  let address = '127.0.0.1'

  return require('local-ip')(process.env.INTERFACE);
}

module.exports.restartBalenaService = (serviceName) => {
  let command = `docker restart $(docker ps -q --filter "name=${serviceName}")`
  console.log(execSync(command))
}
