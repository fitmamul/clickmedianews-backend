const errorHandler = (res, err) => {
    if (err?.message === "validation") {
        return res.status(400).json({
            success: false,
            message: "Error: Email already exists!",
        });
    }
    if (err?.message?.includes("unauthorized")) {
        return res.status(400).json({
            success: false,
            message: "Error: authorization is failed!",
        });
    }

    if (err?.message?.includes("wrong_credentials")) {
        return res.status(400).json({
            success: false,
            message: "Email or password invalid",
        });
    }

    if (err?.message?.includes("user not found")) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    if (err?.message?.includes("category_not_found")) {
        return res.status(404).json({
            success: false,
            message: "Category not found",
        });
    }

    if (err?.message?.includes("article not found")) {
        return res.status(404).json({
            success: false,
            message: "Article not found",
        });
    }

    if (err?.message?.includes("request_failed")) {
        return res.status(400).json({
            success: false,
            message: "Request forgot password failed",
        });
    }

    if (err?.message?.includes("published failed")) {
        return res.status(400).json({
            success: false,
            message: "Published failed",
        });
    }
    if (err?.message?.includes("Ignore article failed")) {
        return res.status(400).json({
            success: false,
            message: "Ignore article failed",
        });
    }
    if (err?.message?.includes("reset_failed")) {
        return res.status(400).json({
            success: false,
            message: "Reset password failed",
        });
    }
    if (err?.message?.includes("wrong_password")) {
        return res.status(401).json({
            success: false,
            message: "Error: Wrong password!",
        });
    }
    if (err?.message?.includes("password_unmatch")) {
        return res.status(400).json({
            success: false,
            message: "Error: Password and confirm password does not match!",
        });
    }

    if (err?.message?.includes("code_wrong")) {
        return res.status(400).json({
            success: false,
            message: "Code is wrong",
        });
    }

    if (err?.message?.includes("Update profile failed")) {
        return res.status(400).json({
            success: false,
            message: "Update profile failed",
        });
    }

    if (err?.message?.includes("Create article failed")) {
        return res.status(400).json({
            success: false,
            message: "Create article failed",
        });
    }

    console.log(err);
    return res.status(500).json({
        success: false,
        message: "Error: Internal server error",
    });
};

module.exports = errorHandler;
