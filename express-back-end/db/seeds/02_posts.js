/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
    id: 1,
    user_id: 1,
    title: 'Botany new plants?',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54Me9UT0gQ_Zz_L7N7cHsuDe-TAviFxT0fBwTY95vQNtyedhyffl56FSI-H2mWP9bOro&usqp=CAU',
    description: `Hey guys! I've got a new baby plant. it's very tiny and cute I need a name suggestion, please.`
  }
  ]);
};
