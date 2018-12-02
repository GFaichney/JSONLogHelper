let bunyan = require('bunyan');
let logger = bunyan.createLogger({name: 'fakelogger', level: 'debug'});


let numEntries = 10;

let randomMessage = () => {
  return 'This is a message. Randomness to be implemented!';
};

let createEntry = () => {
  if(Math.random() < 0.3){
    let err = new Error(randomMessage());
    logger.error(err);
  } else {
    logger.debug(randomMessage());
  }
};

while(numEntries > 0){
  numEntries--;
  createEntry();
}
