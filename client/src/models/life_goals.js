const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const LifeGoals = function (url) {
  this.url = 'http://localhost:3000/api/goals';
  this.request = new RequestHelper(this.url);
};

LifeGoals.prototype.bindEvents = function () {
  PubSub.subscribe("LifeGoalsFormView:goal-submitted", (event) => {
    this.postGoals(event.detail);
  })

};

LifeGoals.prototype.getData = function () {
  this.request.get()
  .then((goals) => {
    debugger;
    PubSub.publish("LifeGoals:data-loaded", goals);
  })
  .catch(console.error);
};

LifeGoals.prototype.postGoals = function (goal) {
  console.log(goal);
  this.request.post(goal)
  .then((goals) => {
    PubSub.publish("LifeGoals:data-loaded", goals);
  })
  .catch(console.error);
};

module.exports = LifeGoals;
