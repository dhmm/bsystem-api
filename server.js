const Express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('bsys', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
const User = sequelize.define( 'user' , {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false,    
    createdAt: false,
});


const app = new Express();
const router = Express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({ message: 'server is running' });
})

router.post('/register', (req, res) => {
    let data = req.body;
    console.log(req.body);

    User.create({
        fullName: data.fullname
    });

    res.json({
        message: 'OK'
    })
})
app.use(router);
app.listen(8000);