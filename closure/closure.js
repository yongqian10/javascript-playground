var ima_celebrity = 'everyone can see me! im famous!';

the_prosident = 'Im the decider!';

//normal function
function pleasantville() {
  var the_mayor = 'I rule Pleasantville with an iron fist';
  // even use this, ima_celebrity wont change
  this.ima_celebrity = 'All my neighbors know who I am!';
}
// ima_celebrity wont change
console.log(ima_celebrity);

//arrow function
pleasantville_arrow = () => {
  this.ima_celebrity = 'All my neighbors know who I am!';
};

// ima_celebrity wont change also
console.log(ima_celebrity);

////////////////////////////////////////////////////////////////////////////////////
// calling object method
var deep_thought = {
  the_answer: 42,
  ask_question: function () {
    // use this to reference the answer from 'master' scope
    return this.the_answer;
  },
};

console.log(deep_thought.ask_question());

////////////////////////////////////////////////////////////////////////////////////
// class constructor
function BigComputer(answer) {
  this.the_answer = answer;
  this.ask_question = function () {
    return this.the_answer;
  };
}

////////////////////////////////////////////////////////////////////////////////////
//function call
function test_this() {
  // return global object
  return this;
}
// console.log(test_this());

////////////////////////////////////////////////////////////////////////////////////
var num = 5;
console.log(this);

function multiply(mult) {
  // console.log(this);
  return this.num * mult;
}

console.log(multiply(5));

////////////////////////////////////////////////////////////////////////////////////
// event handler
function click_handler() {
  alert(this);
}

function addhandler() {
  document.getElementById('thebutton').onclick = click_handler;
}

// now this reference to global window object

function bigComputer(answer) {
  this.the_answer = answer;
  this.ask_question = function () {
    alert(this.the_answer);
  };
}

function addHandler() {
  var deep_thought = new bigComputer(42);
  the_button = document.getElementById('thebutton');

  the_button.onclick = deep_thought.ask_question;
  // by using .call(), this can properly point to the obj called
  the_button.onclick = deep_thought.ask_question.call(deep_thought);
}
// here this pointer point at DOM element

////////////////////////////////////////////////////////////////////////////////////
// manipulating context with .apply() and .call()
var first_object = {
  num: 42,
};

var second_object = {
  num: 24,
};

function multiply1(mult) {
  return this.num * mult;
}

console.log(multiply1.call(first_object, 5)); // return 42 * 5
multiply1.call(second_object, 5); // return 24 * 5

////////////////////////////////////////////////////////////////////////////////////
// bind()

var first_object = {
  num: 42,
};

var second_object = {
  num: 24,
};

function multiply2(mult) {
  return this.num * mult;
}

Function.prototype.bind = function (obj) {
  var method = this,
    temp = function () {
      return method.apply(obj, arguments);
    };
  return temp;
};

var first_multiply = multiply.bind(second_object);
first_multiply(5);

var second_multiply = multiply.bind(second_object);
second_multiply(5);

function addhandler1() {
  var deep_thought = new bigcComputer(42),
    the_button = document.getElementById('thebutton');

  the_button.onclick = deep_thought.ask_question.bind(deep_thought);
}
