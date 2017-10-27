kaboom = (req, res, next) => {
    req.kaboom = "KaBOOOOOM!!";
    next();
};

module.exports = {
    kaboom
};
