const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('recipe-book');
const userCollection = db.collection('user');
const recipeCollection = db.collection('recipe');

(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log("Connect to database");
    } catch (ex) {
        console.log(`Unable to connect to database with url: ${url}. Error: ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function updateUser(user) {
    const query = { _id: user._id };
    const replacement = user;
    await userCollection.replaceOne(query, replacement);
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function addRecipe(recipe) {
    await recipeCollection.insertOne(recipe);
}

async function getRecipes() {
    return await recipeCollection.find({}).toArray();
    //return await recipeCollection.find({});
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addRecipe,
    getRecipes,
}