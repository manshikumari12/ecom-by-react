const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Token Missing" });
    }

    jwt.verify(token, "masai", (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Invalid Token" });
        }

        req.user = {
            userid: decoded.userid,
            name: decoded.name,
            email: decoded.email,
          
        };
        next();
    });
};



module.exports={auth}