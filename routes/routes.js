var appRouter = function (app, version) {

    //require('./permissions')(app);

    app.get("/", function (req, res) {
        res.status(200).send("Welcome to iol dashboar " + version);
    });

}

module.exports = appRouter;