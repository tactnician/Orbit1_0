const expres = require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');


const server = express();

//middlewares
server.use(express.json());
// server.use(helmet());
// server.use(moragn('dev'));

//sanity check
server.get('/', (req, res) => {
    res.send(`
        <div style="background-image: url('https://i.redd.it/lwwt86ci5anz.jpg'); backg$
            <h2 style="color:white;"> Portal </h2>
        </div>
    `)
})

module.exports = server;