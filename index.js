const { ApolloServer, gql } = require('apollo-server');

const queries = require('./typedefs-resolvers/_queries');
const mutations = require('./typedefs-resolvers/_mutations');
const equipments = require('./typedefs-resolvers/equipments');
const supplies = require('./typedefs-resolvers/supplies');
const softwares = require('./typedefs-resolvers/softwares')

const enums = require('./typedefs-resolvers/_enums');
const givens = require('./typedefs-resolvers/givens')
const tools = require('./typedefs-resolvers/tools')
const people = require('./typedefs-resolvers/people')

const typeDefs = [
    queries,
    mutations,
    enums,
    equipments.typeDefs,
    supplies.typeDefs,
    softwares.typeDefs,
    givens.typeDefs,
    tools.typeDefs,
    people.typeDefs,

]

const resolvers = [
    equipments.resolvers,
    supplies.resolvers,
    softwares.supplies,
    givens.resolvers,
    tools.resolvers,
    people.resolvers,
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})