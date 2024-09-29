const jwt = require("jsonwebtoken");
const { blacklistModel } = require("../model/black.list.model");



const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ msg: "Token Missing" });
    }

    try {
       
     const tokenInBlacklist = await blacklistModel.findOne({ token });
        // console.log("Token in blacklist:", tokenInBlacklist);

        if (tokenInBlacklist) {
            return res.status(401).json({ msg: "Token Blacklisted" });
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
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
};

module.exports = { auth }