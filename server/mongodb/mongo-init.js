db.createUser({
    user: "solvd",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "solvd_challenge",
        },
    ],
});
