import Contact from "../models/contact.js";

const validContact = (req, res, next) => {
  if (!req.body.name)
    return res.status(400).send({ message: "didn't enter a name" });

  if (!req.body.phone && !req.body.mobile)
    return res.status(400).send({ message: "didn't enter any number" });
  next();
};

const existingContact = async (req, res, next) => {
  const contact = await Contact.findOne({ name: req.body.name });

  if (contact)
    return res
      .status(400)
      .send({ message: "This contact is already registered" });

  next();
};

const maxCapacity = async (req, res, next) => {
  const isFull = await Contact.find();
  if (isFull.length >= 10)
    return res.status(400).send({ message: "Contacts are full" });
  next();
};

export default { validContact, existingContact, maxCapacity };
