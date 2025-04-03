const twofactor = require('node-2fa');
const ncp = require('copy-paste');

const PASSWORD =  'password';
const SECRET =  'secret';

const token = twofactor.generateToken(SECRET);

ncp.copy(`${PASSWORD}${token.token}`, () => {
  console.log(`Password in clipboard, expires in ${(new Date()).getSeconds() % 30} seconds`);
});