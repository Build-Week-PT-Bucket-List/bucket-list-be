exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', function(tbl) {
    tbl
      .increments('id')
      .unsigned()
      .unique();
    tbl
      .integer('post_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('bucketitempost')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('video');
    tbl.timestamp('created').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('videos');
};
