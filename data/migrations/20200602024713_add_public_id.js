exports.up = function( knex ){
  return knex.schema.alterTable( "photos", ( table ) => {
    table.string( "public_id" );
  } );
};

exports.down = function( knex ){
  return knex.schema.alterTable( "photos", table => {
    table.dropColumn( "public_id" );
  } );
};
