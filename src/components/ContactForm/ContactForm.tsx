import { ChangeEvent, useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import SignatureWithButton from "../SignatureWithButton/SignatureWithButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [contactType, setContactType] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("1.85rem");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});

  interface TouchedFields {
    [key: string]: boolean;
  }

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = event.target;
    const maxHeight = 200;

    setMessage(event.target.value);
    if (event.target.value === "") {
      setTextareaHeight("1.85rem");
    } else {
      setTextareaHeight(
        scrollHeight < maxHeight ? scrollHeight + "px" : maxHeight + "px"
      );
    }
  };

  const handleLabelClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleBlur = (field: string) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });
  };

  const isFormFilled = (): boolean => {
    return (name.length > 0 || (firstName.length > 0 && lastName.length > 0)) &&
      message.length > 0 &&
      email.length > 0 &&
      topic.length > 0 &&
      contactType.length > 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      (!name && (!firstName || !lastName)) ||
      !message ||
      !email ||
      !topic ||
      !contactType
    ) {
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
    setTouchedFields({});

    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 8000);
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
        <select
          value={contactType}
          id="contactType"
          className={`${styles.innerInput} ${touchedFields.contactType ? styles.touched : ''}`}
          onChange={(e) => setContactType(e.target.value)}
          onBlur={() => handleBlur('contactType')}
          required
        >
          <option disabled value="" className={styles.displayNone}></option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
        <label
          className={`${styles.innerLabel} ${styles.innerSelect}`}
          htmlFor="contactType"
        >
          Contact Type
        </label>
      </div>

      <div className={styles.identification}>
        {contactType === "business" && (
          <div
            className={`${styles.fieldHolder} ${styles.identificationChild}`}
          >
            <input
              className={`${styles.innerInput} ${touchedFields.name ? styles.touched : ''}`}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur('name')}
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
              className={`${styles.innerInput} ${touchedFields.firstName ? styles.touched : ''}`}
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => handleBlur('firstName')}
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
              className={`${styles.innerInput} ${touchedFields.lastName ? styles.touched : ''}`}
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => handleBlur('lastName')}
              required
            />
            <label className={styles.innerLabel} htmlFor="lastName">
              Last Name
            </label>
          </div>
        )}

        <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
          <input
            className={`${styles.innerInput} ${touchedFields.email ? styles.touched : ''}`}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
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
          className={`${styles.innerInput} ${touchedFields.topic ? styles.touched : ''}`}
          onChange={(e) => setTopic(e.target.value)}
          onBlur={() => handleBlur('topic')}
          required
        >
          <option disabled value="" className={styles.displayNone}></option>
          <option value="Job">Job</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Other</option>
        </select>
        <label
          className={`${styles.innerLabel} ${styles.innerSelect}`}
          htmlFor="topic"
        >
          Topic
        </label>
      </div>

      <div className={`${styles.fieldHolder} ${styles.identificationChild}`}>
        <textarea
          className={`${styles.autoHeightTextarea} ${styles.innerInput} ${touchedFields.message ? styles.touched : ''}`}
          value={message}
          onChange={handleTextAreaChange}
          onBlur={() => handleBlur('message')}
          style={{ height: textareaHeight }}
          ref={textareaRef}
          required
        />
        <label
          onClick={handleLabelClick}
          className={styles.innerLabel}
          htmlFor="message"
        >
          Provide Details
        </label>
      </div>

      <SignatureWithButton
        buttonText="Send Message"
        includeSignature={false}
        enabled={isFormFilled()}
      />

      {showConfirmation && (
        <div className={styles.confirmationContainer}>
          <p className={styles.confirmationMessage}>
            <strong>Thank You!</strong> I've received your message, and you'll be hearing from me
            soon!{" "}
          </p>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="xl"
            style={{ color: "#ffd43b" }}
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
