module.exports = {

    get: function(req, res){
        req.app.get('db').get_houses().then(houses => {
            res.send(houses);
        })
    },

    post: function(req, res){
        console.log("post works")
        console.log(req.body);

        let {name, address, city, state, zip} = req.body

        req.app.get('db').add_house([name, address, city, state, zip]).then(ok => {
            res.send(ok);
        })
    },

    delete: function(req, res){
        console.log("delete works", req.params.id);
        
        req.app.get('db').delete_house(req.params.id).then(ok => {
            console.log("delete works")
            res.send(ok)
        })
    }
}