const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../dbConnection').promise();

exports.profileupdate = async(req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

       /* const [row] = await conn.execute(
            "SELECT `email` FROM `users` WHERE `email`=?",
            [req.body.email]
          );

        if (row.length > 0) {
            return res.status(201).json({
                message: "The E-mail already in use",
            });
        }*/

       // const hashPass = await bcrypt.hash(req.body.password, 12);
       console.log(req.body.company);
       var sql = "UPDATE users SET name = '"+req.body.name+"',company = '"+req.body.company+"', website = '"+req.body.website+"', userimage = '"+req.body.userimage+"', logo = '"+req.body.logo+"' WHERE id = '4'";
       console.log(sql);      
       const [rows] = await conn.query(sql);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The user profile has been successfully updated.",
            });
        }
    }catch(err){
        next(err);
    }
}