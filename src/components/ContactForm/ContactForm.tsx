import { useState } from "react";

const ContactForm = () => {
  const [contactType, setContactType] = useState("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Job");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    console.log("Form submitted:", {
      contactType,
      name,
      email,
      topic,
      message,
    });

    setContactType("individual");
    setName("");
    setEmail("");
    setTopic("Job");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Type:
        <select
          value={contactType}
          onChange={(e) => setContactType(e.target.value)}
        >
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
      </label>

      {contactType === "business" && (
        <label>
          Business Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      )}

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Topic:
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="Job">Job</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
