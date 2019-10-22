// Create bucketitempostimage table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bucketitempostimage', function(tbl) {
        tbl.increments('id')
           .unsigned()
           .unique();
        tbl.integer('post_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('bucketitempost')
           .onDelete("CASCADE")
           .onUpdate("CASCADE");
        tbl.string('photo');
        tbl.string('video');
        tbl.string('voice_memo');
        tbl.timestamp('created')
        .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bucketitempostimage');
};
