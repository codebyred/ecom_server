/* database connection module */
//importing mysql module
import mysql from 'mysql';
//creating connection to mysql rdbms docker container
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '1234',
    database : 'ecom'
});

//connecting to dbms
connection.connect((err)=>{
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
    console.log('connected as id ' + connection.threadId);
});

//exporting connection
export default connection;
