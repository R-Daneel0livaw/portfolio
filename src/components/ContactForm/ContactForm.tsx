import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [contactType, setContactType] = useState("individual");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      firstName,
      lastName,
      name,
      email,
      topic,
      message,
    });

    setContactType("individual");
    setName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setTopic("Job");
    setMessage("");
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <label>
        Contact Type
        <select
          value={contactType}
          onChange={(e) => setContactType(e.target.value)}
        >
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
      </label>

      <div>
        {contactType === "business" && (
          <label>
            Business Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}

        {contactType == "individual" && (
          <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        )}

        {contactType == "individual" && (
          <label>
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        )}

        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.fieldHolder}>
        <input className={styles.innerInput} type="email" name="email" id="email" required/>
        <label className={styles.innerLabel} htmlFor="email">E-mail</label>
      </div>

      <label>
        Topic
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="Job">Job</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Message
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
