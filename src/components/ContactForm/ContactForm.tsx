import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [contactType, setContactType] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
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

    setContactType("");
    setName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setTopic("");
    setMessage("");
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
        <select
          value={contactType}
          id="contactType"
          className={styles.innerInput}
          onChange={(e) => setContactType(e.target.value)}
          required
        >
          <option
            disabled
            value=""
            className={styles.displayNone}
          ></option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
        <label className={`${styles.innerLabel} ${styles.innerSelect}`} htmlFor="contactType">
          Contact Type
        </label>
      </div>

      <div className={styles.identification}>
        {contactType === "business" && (
          <div
            className={`${styles.fieldHolder} ${styles.identificationChild}`}
          >
            <input
              className={styles.innerInput}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className={styles.innerLabel} htmlFor="name">
              Business Name
            </label>
          </div>
        )}

        {(contactType == "individual" || contactType == "") && (
          <div
            className={`${styles.fieldHolder} ${styles.identificationChild}`}
          >
            <input
              className={styles.innerInput}
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label className={styles.innerLabel} htmlFor="firstName">
              First Name
            </label>
          </div>
        )}

        {(contactType == "individual" || contactType == "") && (
          <div
            className={`${styles.fieldHolder} ${styles.identificationChild}`}
          >
            <input
              className={styles.innerInput}
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label className={styles.innerLabel} htmlFor="lastName">
              Last Name
            </label>
          </div>
        )}

        <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
          <input
            className={styles.innerInput}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className={styles.innerLabel} htmlFor="email">
            E-mail
          </label>
        </div>
      </div>

      <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
        <select
          value={topic}
          id="topic"
          className={styles.innerInput}
          onChange={(e) => setTopic(e.target.value)}
          required
        >
          <option
            disabled
            value=""
            className={styles.displayNone}
          ></option>
          <option value="Job">Job</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Other</option>
        </select>
        <label className={`${styles.innerLabel} ${styles.innerSelect}`} htmlFor="topic">
          Topic
        </label>
      </div>

      <label>
        Provide Details
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
