export default class Contacts {
    constructor() {
        this.data = []
    }

    get = () => {
        return this.data
    }

    create = (contact) => {
        this.data.push(contact)
    }
}