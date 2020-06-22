const { execSync } = require('child_process')

module.exports.getIPAddress = () => {
  let address = '127.0.0.1'

  return require('local-ip')(process.env.INTERFACE);
}

module.exports.restartBalenaService = (serviceName) => {
  let command = `docker restart ${serviceName}"`
  console.log(execSync(command))
}
