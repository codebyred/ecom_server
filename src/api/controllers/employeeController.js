import conn from '../dB/conn.js';

function get_employee_info(req,res){
    let sql = `SELECT * FROM ecom.employee;`;
    conn.query(sql,function(err,results,fields){
        if(err) throw err;
        res.set({
            'Content-type':'application/json',
            ETag: '12345'
        });
        res.status(200).json(results);

    });
}
function post_employee_info(req,res){
    let sql = `INSERT INTO employee(emp_id,first_name,last_name) VALUES(?,?,?);`;
    conn.query(sql,[req.body.emp_id,req.body.first_name,req.body.last_name],function(err,results,fields){
        if(err)throw err;
        console.log("query success");
        res.send("success");
    });
}
function update_employee_info(req,res){
    let sql = `UPDATE employee SET first_name = ?,last_name = ? WHERE emp_id = ?;`;
    conn.query(sql,[req.body.first_name,req.body.last_name,req.params.id],function(err,results,fields){
        if(err) throw err;
        console.log(req.params.id);
        res.send("success");
    });
}
function delete_employee_info(req,res){
    let sql = `DELETE FROM employee WHERE emp_id = ?`;
    conn.query(sql,[req.params.id],function(err,results,fields){
        if(err)throw err;
        res.send("success");
    });
}
export {get_employee_info,post_employee_info,update_employee_info,delete_employee_info};