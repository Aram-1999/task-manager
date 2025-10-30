import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  };

  // TODO: Implement handleSubmit function
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData.name, formData.email, formData.message)
    // TODO: Prevent default form submission
    // TODO: Log the form data (name, email, message) to the console
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          // TODO: Add value and onChange props
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // TODO: Add value and onChange props
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          // TODO: Add value and onChange props (remember textarea uses value prop)
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
