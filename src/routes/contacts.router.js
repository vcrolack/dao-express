import { Router } from "express";
import ContactDTO from "../dao/DTOs/contact.dto.js";
import { contactService } from "../repositories/index.js"

// import Contacts from "../dao/mongo/contacts.mongo.js";

const router = Router()

router.get("/", async (req, res) => {
    let result = await contactService.getContacts()
    res.send({ status: "success", payload: result })
})

router.post("/", async (req, res) => {
    let { name, last_name, phone } = req.body

    let contact = new ContactDTO({ name, last_name, phone })
    console.log(contact)
    let result = await contactService.createContact(contact)
    console.log(result)
})

router.put()

router.delete("hard-delete")

router.delete("soft-delete")
export default router