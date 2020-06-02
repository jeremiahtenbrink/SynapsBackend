const UserDb = require( "../users/users-model.js" );
const DEBUG_NAME = "UID Middle Wear";
const createError = require( "./createError" );

module.exports = ( req, res, next ) => {
  const uid = req.headers[ "auth" ];
  
  if( uid === "" || uid === undefined ){
    res.logger.info( "Someone is asking for a user with no uid" );
    const error = createError( 500, DEBUG_NAME, "You must send in a uid" );
    next( error );
    return;
  }
  
  console.log( "uid from middleware", uid );
  UserDb.findBy( { uid } )
    .then( user => {
      if( user.length > 0 ){
        res.logger.success( DEBUG_NAME, "Found user for uid: " + uid );
        req.user = user[ 0 ];
        next();
      }else{
        res.logger.error( "Could not find a user with a uid of: " + uid );
        next( createError( 404,
          DEBUG_NAME,
          "Could not find a user with that uid. ",
        ) );
      }
    } )
    .catch( err => {
      next( createError( err.status || 500,
        DEBUG_NAME,
        "Server error, Check server logs.",
        err,
      ) );
    } );
};
