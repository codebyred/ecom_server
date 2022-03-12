export function validateUser(req,res,next){
    if(!req.body.username || req.body.username.length<3){
        return res.status(400).send({
            msg:"Please enter a username greater than 3 characters"
        })
    }
    if(!req.body.password || req.body.password.length<6){
        return res.status(400).send({
            msg:"Password should be more than six characters"
        })
    }
        // password (repeat) does not match
    if (!req.body.password_repeat || req.body.password != req.body.password_repeat){
        return res.status(400).send({
            msg: 'Both passwords must match'
        });
        }
    next();
}
