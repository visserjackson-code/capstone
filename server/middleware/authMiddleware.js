import jwt from "jsonwebtoken";


//security checkpoint function for every route
export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //reject token if it doesn't start with bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "No token provided"});
    }
    //grab only token part after "Bearer "
    const token = authHeader.split(" ")[1];

    try {
        //use JWT to verify token is valid, and if valid, make userId accessible to controllers
        // eslint-disable-next-line no-undef
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        //token is valid and can be passed along
        next();
    } catch (err) {
        res.status(401).json({message: "Invalid token:", error: err.message}); 
    }
}