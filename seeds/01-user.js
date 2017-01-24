exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
        .then(function() {
            const users = [{
                id: 1,
                email: 'joe@crabshack.com',
                password: 'password54321'
            }, {
                id: 2,
                email: 'ralph@crabshack.com',
                password: 'password12345'
            }]
            return knex('user').insert(users);
        });
};
