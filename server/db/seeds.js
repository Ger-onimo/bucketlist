use lifeGoals;
db.dropDatabase();

db.goals.insertMany([
  {
    goals: "Swim with sharks"
  },
  {
    goals: "Climb Machu Pichu"
  },
  {
    goals: "CEO of successful company"
  }
]);
