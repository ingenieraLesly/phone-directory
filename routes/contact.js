import express from "express";
import controller from "../controllers/contact.js";
import contactMidd from "../middlewares/contact.js";

const router = express.Router();

router.post(
  "/add",
  contactMidd.validContact,
  contactMidd.existingContact,
  contactMidd.maxCapacity,
  controller.addContact
);
router.get("/list", controller.listContact);
router.get("/isFull", controller.isFull);
router.get("/search/:name?", controller.searchContact);
router.delete("/delete/:_id", controller.deleteContact);

export default router;
