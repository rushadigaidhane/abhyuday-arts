import Contact from "../models/Contact.js";

// Handle form submission
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email and Message are required" });
    }

    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Contact form submitted successfully" });
  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// (Optional) Get all submissions - for admin view
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};
