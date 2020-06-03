module.exports = ( err, req, res, next ) => {
  console.info( "Setting website error message." );
  console.info( "Waiting for next request." );
  res.status( err.message || 500 ).json( {
    status: err.status || 500, message: err.userMessage || "Server error",
  } );
};