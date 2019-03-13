const faker = require('faker');

// Faker function to create a fake user based on schema in migration file

const createFakeUser = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

// Deletes the existing users seeds, then runs the for loop that runs createFakeUser function to seed database with 500 dummy users

exports.seed = function(knex, Promise) {
  const desiredFakeUsers = 100;
  return knex('users').del().truncate()
    .then(async function () {
      for (let i = 0; i < 5; i ++) {
        for (let i = 0; i < desiredFakeUsers; i++) {
          const fakeUsers = [];
          fakeUsers.push(createFakeUser());
          await knex('users').insert(fakeUsers);
        };
      };
    });
};
