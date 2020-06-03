exports.up = function( knex ){
  return knex.schema.alterTable( "photos", table => {
    table.dropColumn( "public_id" );
    
  } ).then( res => {
    return knex.schema.alterTable( "photos", table => {
      table.string( "public_id" );
    } );
  } );
};

exports.down = function( knex ){
  return knex.schema.alterTable( "phtots", table => {
    table.dropColumn( "public_id" );
  } ).then( res => {
    return knex.schema.alterTable( "photos", table => {
      table.integer( "public_id" );
    } );
  } );
};
