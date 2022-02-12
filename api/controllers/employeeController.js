import conn from '../dB/conn.js';
function get_employee_info(req,res){
    let sql = `SELECT * FROM ecom.employee;`;
    conn
    .query(sql,function(err,results,fields){
        if(err) throw err;
        //sending json response after getting the result from query
        res
        .set({
            'Content-type':'application/json',
            ETag: '12345'
        });
        res.status(200).json(results);


    });
}
function post_employee_info(req,res){
    console.log(req.body.emp_id);
    //setting req.body.properties as variables
    let emp_id= req.body.emp_id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    //using vairables as values in query
    let sql = `INSERT INTO employee(emp_id,first_name,last_name) VALUES(?,?,?);`;
    conn
    .query(sql,[emp_id,first_name,last_name],function(err,results,fields){
        if(err)throw err;
        console.log("query success");
        res.send("success");
    });
}
export {get_employee_info,post_employee_info};