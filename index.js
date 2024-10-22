const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas/ProjectSchema');
const resolvers = require('./src/resolvers/ProjectResolver');

const startServer = async()=>{
await mongoose.connect('mongodb+srv://rofriasbo:cDJ8T7ZrVJDyqSa9@taskgraphql.vnsuj.mongodb.net/?retryWrites=true&w=majority&appName=ProjectGraphql')

const server  = new ApolloServer({typeDefs,resolvers});
server.listen().then(({url})=>{

    console.log(`Servidor corriendo en ${url}`);
});
};

startServer();