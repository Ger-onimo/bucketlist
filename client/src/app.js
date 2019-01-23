const LifeGoalsFormView = require('./views/life_goals_form_view.js')
const LifeGoals = require('./models/life_goals.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("Javascript loaded");

  const lifeGoalsForm = document.querySelector('form#goals-form');
  const lifeGoalsFormView = new LifeGoalsFormView(lifeGoalsForm);
  lifeGoalsFormView.bindEvents();

  const lifeGoals = new LifeGoals();
  lifeGoals.bindEvents();
  lifeGoals.getData();
});
