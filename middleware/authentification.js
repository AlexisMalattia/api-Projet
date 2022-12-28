const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; //l'élément 0 est le mot Bearer, l'élément 1 est le token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.utilisateurId;
        req.authenfitification = {
            userId: userId
        };
        next();
    }
    catch (error){
        res.status(401).json({
            error
        });
    }
}