// resolvers/index.js
const { getAllUsers, getUserById } = require('../controllers/userController');

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    getUsers: () => getAllUsers(),
    getUser: (parent, { id }) => getUserById(id),
  },
};

module.exports = resolvers;
