const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Fillipe',
    email: 'fillipe@mail.com',
    phone: '1212121232',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
