function protectRoutes(req, res, next) {
    if (!res.locals.isAuth) {
        return res.redirect("/401");
    }

    if (
        req.path.startsWith("/admin") &&
        (!res.locals.isAdmin || res.locals.isAdmin == null)
    ) {
        return res.redirect("/403");
    }

    next();
}

module.exports = protectRoutes;
