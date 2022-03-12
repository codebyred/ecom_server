import conn from "../dB/conn.js";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export function signup(req,res){
    let sql = `SELECT * FROM users WHERE username = ?;`;
    conn.query(sql,[req.body.username],(err,result)=>{
        if(err) throw err;
        if(result.length){
            res.status(409).send({
                msg:"username already exist"
            })
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).send({
                        msg:err
                    });
                }
                conn.query('INSERT INTO users (id, username, password) VALUES(?,?,?)',
                [uuidv4(),req.body.username,hash],(err,result)=>{
                    if(err){
                        throw err;
                        return res.status(400).send({
                            msg:err
                        });
                    }
                    return res.status(201).send({
                        msg: 'Registered!'
                      });
                })

            })
        }
    });
}
