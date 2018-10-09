var ObjectID = require('mongodb').ObjectID
module.exports = function(app, db) {
    app.post('/todo', (req, res) => {
        const todo = { text: req.body.body, title: req.body.title };
        db.collection('todo').insert(todo, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has ocurred' });
            }
            else {
                res.send(result.ops[0])
            }

        });
    });
    app.get('/todo/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) }
        db.collection('todo').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured'});
            }
            else {
                res.send(item)
            }
        });
    });
};