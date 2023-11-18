import contactsModel from './models/Contacts.js'

export default class Auth {
    constructor() {

    }

    register = async () => {
        let contacts = await contactsModel.find()
        return contacts
    }

    login = async (contact) => {
        const newContact = await contactsModel.create({contact})
    } 

    confirmSignUp = () => {}

    forgotPassword = () => {}
}