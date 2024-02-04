import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
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

      <section className={`${styles.sectionSpacer} ${styles.details}`}>
        <p className={styles.seeMore}>
          Thank you for reaching out! Whether it's a project, collaboration, or
          just a friendly hello, I'm eager to hear from you. No task is too big
          or small, and your message is my top priority. Let's connect and
          create something great together!
        </p>
      </section>

      <ContactForm />

      {/* <footer className={styles.footerContainer}>
          <p className={styles.seeMore}>
            Thank you for visiting my corner of the web. I invite you to
            connect, share ideas, and explore the exciting intersections of
            technology, learning, and life.
          </p>
          <SignatureWithButton buttonText="Connect" />
        </footer> */}
      <SocialMedia />
    </section>
  );
}
