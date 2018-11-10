function Essence(name) {
  this.name = name;

  let healts = 100;

  let timerId;

  function start() {
    alert('do not feed more than 200');
    timerId = setInterval(function func() {
      if (healts > 200) {
        alert('too much food, pet ran away')
      } else if (healts <= 30 && healts > 10) {
        console.log(name + ' = ' + healts + ' feed the pet quickly');
        healts -= 5;
      } else if (healts <= 200 && healts !== 0) {
        healts -= 5;
      } else {
        alert('game over');
      }
    }, 3000);
  }

  start();

  this.getHealts = function () {
    console.log(healts)
  };

  this.eat = function () {
    healts += 50;
    clearInterval(timerId);
    start()
  };

  this.walk = function() {
    healts -= 10;
    clearInterval(timerId);
    start()
  };

  this.sleep = function () {
    healts += 20;
    clearInterval(timerId);
    start()
  };

  this.drink = function () {
    healts += 30;
    clearInterval(timerId);
    start()
  };

  this.jump = function () {
    healts -= 20;
    clearInterval(timerId);
    start()
  };
}

let rabbit = new Essence('bunny');



