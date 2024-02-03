import styles from "./SignatureWithButton.module.css";

interface ButtonProps {
  buttonText: string;
}

export default function SignatureWithButton({ buttonText }: ButtonProps) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.signature}>Eric Hine</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </>
  );
}