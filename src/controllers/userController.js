// controllers/userController.js
const users = [
    { id: '1', username: 'user1', email: 'user1@example.com' },
    { id: '2', username: 'user2', email: 'user2@example.com' },
    { id: '3', username: 'user3', email: 'user3@example.com' },
  ];
  
  const getUserById = (id) => users.find((user) => user.id === id);
  const getAllUsers = () => users;
  
  module.exports = { getUserById, getAllUsers };
  