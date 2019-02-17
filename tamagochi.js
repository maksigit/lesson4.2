function Essence(name) {
  alert('do not params more than 200');
  let thisPat = this;
  this.name = name;
  this.happiness = 100;
  this.hunger = 100;
  this.health = 100;
  this.weariness = 100;

  let timerId;

  function start() {
    timerId = setInterval(function func() {
      if (thisPat.health >= 200 || thisPat.happiness >= 200 || thisPat.hunger >= 200 || thisPat.weariness >= 200) {
        alert('too much food, pet ran away');
        clearInterval(timerId);
      } else if (thisPat.health <= 0 || thisPat.happiness <= 0 || thisPat.hunger <= 0) {
        alert('game over');
        clearInterval(timerId);
      } else if (thisPat.weariness <= 0) {
        thisPat.weariness += 50;
        thisPat.getParams();
        console.log('sleep + 50 wearinnes =>', thisPat.weariness);
      } else if (thisPat.health <= 30 && thisPat.health > 0) {
        console.log(name + ' = ' + thisPat.health + ' feed the pet quickly');
        thisPat.health -= 1;
      } else if (thisPat.health <= 200 && thisPat.health !== 0) {
        thisPat.health -= 5;
      }
    }, 1000);
  }

  start();

  this.getParams = function () {
    console.log(this.name, 'health', this.health);
    console.log(this.name, 'happiness', this.happiness);
    console.log(this.name, 'hunger', this.hunger);
    console.log(this.name, 'weariness', this.weariness);
  };

  this.eat = function () {
    this.health += 50;
    this.hunger += 10;
    this.happiness += 10;
    this.weariness -= 10;
    clearInterval(timerId);
    this.getParams();
    start()
  };

  this.walk = function () {
    this.health -= 10;
    this.weariness -= 10;
    this.hunger -= 10;
    this.happiness += 10;
    clearInterval(timerId);
    this.getParams();
    start()
  };

  this.sleep = function () {
    this.health += 20;
    this.happiness += 10;
    this.weariness += 10;
    this.hunger -= 10;
    clearInterval(timerId);
    this.getParams();
    start()
  };

  this.drink = function () {
    this.health += 30;
    this.happiness += 10;
    this.hunger += 30;
    clearInterval(timerId);
    this.getParams();
    start()
  };

  this.jump = function () {
    this.health -= 20;
    this.weariness -= 10;
    this.hunger -= 20;
    clearInterval(timerId);
    this.getParams();
    start()
  };

  this.angry = function () {
    this.health -= 20;
    this.weariness -= 10;
    this.hunger -= 20;
    this.happiness -= 50;
    clearInterval(timerId);
    this.getParams();
    start()
  };
}

let rabbit = new Essence('bunny');



