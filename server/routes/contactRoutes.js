import express from "express";
import { submitContactForm, getContacts } from "../controllers/contactController.js";

const router = express.Router();

// POST contact form
router.post("/", submitContactForm);

// GET all contacts (admin use only)
router.get("/", getContacts);

export default router;
