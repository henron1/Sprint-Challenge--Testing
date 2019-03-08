

exports.up = function(knex, Promise) {
	return knex.schema.createTable("games", table => {
		table.increments();
		table.string("title");
		table.string("genre");
		table.integer("releaseYear");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("games");
};