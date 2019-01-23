const PubSub = require('../helpers/pub_sub.js');

const LifeGoalsFormView = function (form) {
  this.form = form;
};

LifeGoalsFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

LifeGoalsFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newGoal = this.createGoal(event.target);
  PubSub.publish('LifeGoalsFormView:goal-submitted', newGoal);
  event.target.reset();
  console.log(newGoal);
};

LifeGoalsFormView.prototype.createGoal = function (form) {
  const newGoal = {
    goal: form.goal.value
  }
  return newGoal;
};


module.exports = LifeGoalsFormView;
