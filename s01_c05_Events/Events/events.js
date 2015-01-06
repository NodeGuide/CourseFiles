var count = 0;

var increaseCount = function() {
  console.log('new visitor');
  count++;
}

setInterval(function(){
  increaseCount();
}, 1000);