const Express = require('express');
const bodyParser = require('body-parser');
const app = new Express();
const router = Express.Router();
const response = require('./common/response.js');
const cors = require('cors');

class App {
    constructor() {

        app.use(cors());
        
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        app.get('/', (req, res) => {            
            res.send(response('server is running'));
        })

        require('./routes')(app);

        app.all('/*', (req, res) => {
            res.send(response('There is no endpoint'), true);
        })
        app.use(router);
    }
    run(port) {
        app.listen(port);
    }
}

module.exports = App;