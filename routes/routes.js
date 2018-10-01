module.exports = function(app){

    app.get('/', (req, res) => {
        res.render('example.twig', {
            message : 'Bonjour monde !'
        });
    });

    //Middleware when route not exist
    app.use(function(req, res, next){
        res.status(404);
        res.type('txt').send('Not found');
    });

}