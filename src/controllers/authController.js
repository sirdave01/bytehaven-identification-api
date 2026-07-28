export const githubCallbackSuccess = (req, res) => {
    return res.redirect("/api-docs");
};

export const loginFailed = (req, res) => {
    return res.status(401).json({
        success: false,
        message: "GitHub authentication failed."
    });
};

export const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.session.destroy(() => {
            return res.status(200).json({
                success: true,
                message: "Logged out successfully."
            });
        });
    });
};

export const currentUser = (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "User is not authenticated."
        });
    }

    return res.status(200).json({
        success: true,
        data: req.user
    });
};