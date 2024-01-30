import styles from "./SignatureWithHireButton.module.css";

export default function SignatureWithHireButton() {
  return (
    <>
      <p className={styles.signature}>Eric Hine</p>
      <button
        className={styles.hireButton}
      >
        Hire Me
      </button>
    </>
  );
}