module.exports = function(app, db) {
    
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    var money = db.collections.money;
    
    // sample api route
    app.get('/api/money', function(req, res) {
        // use mongoose to get all nerds in the database
        money.find(function(err, moneys) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(moneys); // return all moneys in JSON format
        });
    });
    
    app.post('/api/money', function(req, res) {
        //FIXXXXX  req.body muss geprüft werden ob daten korrekt und ob einzel oder liste!
        console.log(req.body);
        console.log(req.moneys);
        var entry = new money(req.body);
        entry.save(function(err, result){
            
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            
            res.json(result); // return all nerds in JSON format
        });
    });

    // route to handle creating (app.post)
    // route to handle delete (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
