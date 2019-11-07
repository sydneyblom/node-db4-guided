exports.up = function(knex) {
  //need to figure out who is the many and who is the one
  //always want to create our one table first
  return (
    knex.schema
      .createTable("species", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
      })
      //chaining a table
      .createTable("animals", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();

        //define foreign key
        tbl.integer("species_id")
        .unsigned()
        .references('id')
        .inTable('species');
        .onUpdate('Restrict')//about changesin the value of the primary key
        .onUpdate('CASCADE')//about changing the value of the primary key table
      });


      .createTable("zoos", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.string("address", 255);

        //define foreign key
        tbl.integer("serial")
        .unsigned()
        .references('id')
        .inTable('zoo');
        .onUpdate('Restrict')//about changesin the value of the primary key
        .onUpdate('CASCADE')//about changing the value of the primary key table
      })


      .createTable("animal_zoos", tbl => {
        tbl.increments();
        tbl.date("from").notNullable();
        tbl.date("to');

        //define foreign key
        tbl.integer("zoo_id")
        .unsigned()
        .references('id')
        .inTable('zoo');
        .onUpdate('Restrict')//about changesin the value of the primary key
        .onUpdate('CASCADE')//about changing the value of the primary key table

        tbl.integer("animal_id")
        .unsigned()
        .references('id')
        .inTable('animals');
        .onUpdate('Restrict')//about changesin the value of the primary key
        .onUpdate('CASCADE')//about changing the value of the primary key tabl
      })
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists();
};
