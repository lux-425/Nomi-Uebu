const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore(){
    const MongoDBStore = mongoDbStore(expressSession);

    const store = new MongoDBStore({
        uri: 'mongodb://0.0.0.0:27017/',
        databaseName: 'online-shop',
        collection: 'sessions',
    });

    return store;
}

function createSessionConfig(){
    return {
        secret: 'prfm-scrt²-425*',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 4 * 24 * 60 * 60 * 1000
        }
    };
}

module.exports = createSessionConfig;