import contactsModel from './models/Contacts.js'

export default class Contacts {
    constructor() {

    }

    get = async () => {
      const query = 'SELECT * FROM contacts';
      const result = await executeQuery(query)
      return result
    }

    create = async (contact) => {

    } 
}