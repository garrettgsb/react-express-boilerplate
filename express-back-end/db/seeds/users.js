/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      name: 'Chikorita',
      email: 'chikorita@pokemon.com',
      password: 'password',
      avatar: 'https://archives.bulbagarden.net/media/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png',
      quote: 'Beleaf in yourself!'  
    }
  ]);
};

