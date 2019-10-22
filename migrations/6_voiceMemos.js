exports.up = function(knex, Promise) {
  return knex.schema.createTable('voiceMemos', function(tbl) {
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
    tbl.string('voice_memo');
    tbl.timestamp('created').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('voiceMemos');
};
