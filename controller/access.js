var oracledb = require('oracledb');

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

module.exports = {
  describe(req, res, next) {
    oracledb.getConnection(
      {
        user          : "capstone",
        password      : "capstone123",
        connectString : "miraencs.iptime.org:9292/orcl"
      },
      function(err, connection)
      {
        if (err) {
          console.error(err.message);
          return;
        }
        connection.execute(
          `SELECT *
           FROM JJG_TEST
          `,
           
        //  [103],  // bind value for :id
       /* { fetchInfo :
          {
            "RANK-CODE":      { type : oracledb.STRING },  // return the date as a string
         }
      }, */
        function(err, result) 
          {
            if (err) {
              console.error(err.message);
              doRelease(connection);
              return;
            }
           // console.log(result.rows);
            const url = result.rows;
            res.send(url);
            doRelease(connection);
          });
      });
  }
}