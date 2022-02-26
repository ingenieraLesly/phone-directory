import Contact from "../models/contact.js";

const addContact = async (req, res) => {
  const schema = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    mobile: req.body.mobile,
  });

  const result = await schema.save();
  return result
    ? res.status(201).send({ message: "Contact registered" })
    : res.status(500).send({ message: "Failed to register contact" });
};

const listContact = async (req, res) => {
  const contacts = await Contact.find();
  return contacts.length > 0
    ? res.status(200).send({ contacts })
    : res.status(404).send({ message: "No contacts" });
};

const searchContact = async (req, res) => {
  const contact = await Contact.findOne(
    {
      name: req.params["name"],
    },
    { phone: 1, mobile: 1, _id: 0 }
  );
  return contact
    ? res.status(200).send({ contact })
    : res.status(404).send({ message: "Contact no found" });
};

const deleteContact = async (req, res) => {
  const contact = await Contact.findOneAndDelete({ _id: req.params["_id"] });
  return contact
    ? res.status(200).send({ message: "Contact deleted" })
    : res.status(400).send({ message: "Failed to delete contact" });
};

const isFull = async (req, res) => {
  const capacity = await Contact.find();
  if (capacity.length >= 10) {
    return res.status(200).send({ message: "Contacs are full" });
  } else {
    return res
      .status(200)
      .send({ message: `You can add ${10 - capacity.length} Contacts` });
  }
};
export default {
  addContact,
  listContact,
  searchContact,
  deleteContact,
  isFull,
};
