exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('profile_pic');
      table.text('bio');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
    })

    .createTable('stories', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.string('title');
      table.text('content');
      table.string('status').defaultTo('draft');
      table.string('type').defaultTo('private');
      table.integer('view_count').defaultTo(0); 
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('published_date');
      table.timestamp('last_modified_date');
    })
    
    .createTable('tags', function (table) {
      table.increments('id').primary();
      table.integer('story_id').unsigned().notNullable();
      table.foreign('story_id').references('id').inTable('stories');
      table.string('name');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })
    
    .createTable('story_categories', function (table) {
      table.increments('id').primary();
      table.integer('story_id').unsigned().notNullable();
      table.integer('category_id').unsigned().notNullable();
      table.foreign('story_id').references('id').inTable('stories');
      table.foreign('category_id').references('id').inTable('categories');
    })

    .createTable('saved_stories', function (table) {
      table.increments('id').primary();
      table.integer('story_id').unsigned().notNullable();
      table.integer('category_id').unsigned().notNullable();
      table.foreign('story_id').references('id').inTable('stories');
      table.foreign('category_id').references('id').inTable('categories');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('subscriptions', function (table) {
      table.increments('id').primary();
      table.integer('user1').unsigned().notNullable();
      table.integer('user2').unsigned();
      table.integer('category_id').unsigned();
      table.integer('tags_id').unsigned();
      table.foreign('user1').references('id').inTable('users');
      table.foreign('user2').references('id').inTable('users');
      table.foreign('category_id').references('id').inTable('categories');
      table.foreign('tags_id').references('id').inTable('tags');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('comments', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('story_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('story_id').references('id').inTable('stories');
      table.text('content');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('likes', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('story_id').unsigned();
      table.integer('comments_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('story_id').references('id').inTable('stories');
      table.foreign('comments_id').references('id').inTable('comments');
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('notifications', function (table) {
      table.increments('id').primary();
      table.integer('user1').unsigned().notNullable();
      table.integer('user2').unsigned();
      table.integer('story_id').unsigned();
      table.foreign('user1').references('id').inTable('users');
      table.foreign('user2').references('id').inTable('users');
      table.foreign('story_id').references('id').inTable('stories');
      table.string('notification_type');
      table.boolean('is_read').defaultTo(false);
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })

    .createTable('messages', function (table) {
      table.increments('id').primary();
      table.integer('user1').unsigned().notNullable();
      table.integer('user2').unsigned().notNullable();
      table.integer('story_id').unsigned();
      
      table.foreign('user1').references('id').inTable('users');
      table.foreign('user2').references('id').inTable('users');
      table.foreign('story_id').references('id').inTable('stories');
      table.text('message_content');
      table.boolean('is_read').defaultTo(false);
      table.timestamp('created_date').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("categories")
    .dropTableIfExists("stories")
    .dropTableIfExists("tags")
    .dropTableIfExists("story_categories")
    .dropTableIfExists("saved_stories")
    .dropTableIfExists("subscriptions")
    .dropTableIfExists("comments")
    .dropTableIfExists("likes")
    .dropTableIfExists("notifications")
    .dropTableIfExists("messages")

  
};
