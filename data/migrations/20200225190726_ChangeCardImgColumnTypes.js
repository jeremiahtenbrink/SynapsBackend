exports.up = function( knex ){
  return knex.schema.alterTable( "cards", tbl => {
    tbl.string( "image_front" ).alter();
    tbl.string( "image_back" ).alter();
  } );
};

exports.down = function( knex ){
  return knex.schema.table( "cards", tbl => {
    tbl.dropColumn( "image_front" );
    
    tbl.dropColumn( "image_back" );
    tbl.binary( "image_front" );
    tbl.binary( "image_back" );
  } );
};
