exports.up = function( knex ){
  return knex.schema.alterTable( "decks", table => {
    table.boolean( "favorite" ).defaultTo( false );
  } );
};

exports.down = function( knex ){
  return knex.schema.alterTable( "decks", table => {
    table.dropColumn( "favorite" );
  } );
};
