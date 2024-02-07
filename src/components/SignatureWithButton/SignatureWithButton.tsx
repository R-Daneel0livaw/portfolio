import { useNavigate } from "react-router-dom";
import styles from "./SignatureWithButton.module.css";
import PathConstants from "../../routes/pathConstants";

interface ButtonProps {
  buttonText: string;
  includeSignature: boolean;
}

export default function SignatureWithButton({ buttonText, includeSignature }: ButtonProps) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.container}>
        {includeSignature && <p className={styles.signature}>Eric Hine</p>}
        <button onClick={() => navigate(PathConstants.CONTACT)} type="submit" className={styles.button}>{buttonText}</button>
      </div>
    </>
  );
}