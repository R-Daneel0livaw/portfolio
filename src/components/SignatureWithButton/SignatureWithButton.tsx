import { useNavigate } from "react-router-dom";
import styles from "./SignatureWithButton.module.css";
import PathConstants from "../../routes/pathConstants";
import { ButtonProps } from "../../types";

export default function SignatureWithButton({ buttonText, includeSignature, enabled }: ButtonProps) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.container}>
        {includeSignature && <p className={styles.signature}>Eric Hine</p>}
        <button
          onClick={() => navigate(PathConstants.CONTACT)}
          type="submit"
          className={`${styles.button} ${
            enabled ? styles.enabled : styles.disabled
          }`}
          disabled={!enabled}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}