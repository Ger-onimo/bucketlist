const LifeGoalsFormView = require('./views/life_goals_form_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log("Javascript loaded");

  const lifeGoalsForm = document.querySelector('form#goals-form');
  const lifeGoalsFormView = new LifeGoalsFormView(lifeGoalsForm);
  lifeGoalsFormView.bindEvents();
});
