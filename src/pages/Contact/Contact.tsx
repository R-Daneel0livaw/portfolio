import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.information}>
        <section id="introduction">
          <PageHeader
            title="Contact"
            description={
              <p>
                Get in touch and let me know how I can{" "}
                <span className={styles.highlight}>help.</span>
              </p>
            }
          />
        </section>

        <section className={`${styles.details}`}>
          <p className={styles.seeMore}>
            Thank you for reaching out! Whether it's a project, collaboration,
            or just a friendly hello, I'm eager to hear from you. No task is too
            big or small, and your message is my top priority. Let's connect and
            create something great together!
          </p>
        </section>

        <ContactForm />
      </div>
    </section>
  );
}
