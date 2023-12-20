// schema/index.js
const { gql } = require('apollo-server-express');
const userSchema = require('./user.graphql');

const typeDefs = gql`
type Query {
    hello: String
    getUsers: [User]
    getUser(id: ID!): User
  }
  
  type User {
    id: ID!
    username: String!
    email: String!
  }
  ${userSchema}
`;

module.exports = typeDefs;
