var events = require('events');
var eventEmitter = new events.EventEmitter();

var count = 0;

var increaseCount = function() {
  console.log('new visitor');
  count++;
}

eventEmitter.on('visit', increaseCount);

setInterval(function(){
  eventEmitter.emit('visit');
}, 1000);