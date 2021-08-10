const { gql } = require('apollo-server');
const dbWorks = require('../dbWorks');

/* enumeration은 index에서 import되어 한번에 처리된다
요기 Role은 현재 query string일 뿐이라서 여기서 import될 필요 없다 */
const typeDefs = gql`
    type Software {
        id: ID!
        used_by: Role!
        developed_by: String!
        description: String
    }
`
const resolvers = {
    Query: {
        softwares: (parent, args) => dbWorks.getSoftwares(args),
        software: (parent, args) => dbWorks.getSoftwares(args)[0]
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}