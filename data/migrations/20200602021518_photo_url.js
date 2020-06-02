exports.up = function( knex ){
  return knex.schema.alterTable( "photos", ( table ) => {
    table.string( "photo_url" );
    table.renameColumn( "public_id", "id" );
  } );
};

exports.down = function( knex ){
  return knex.schema.alterTable( "photos", table => {
    table.dropColumn( "photo_url" );
    table.renameColumn( "id", "public_id" );
  } );
};
