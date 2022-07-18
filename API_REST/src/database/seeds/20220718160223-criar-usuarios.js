const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        nome: 'Lucas1',
        email: 'lucas1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lucas2',
        email: 'lucas2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lucas3',
        email: 'lucas3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down() {},
};
