import { useNavigate } from "react-router-dom";
import styles from "./SignatureWithButton.module.css";
import PathConstants from "../../routes/pathConstants";

interface ButtonProps {
  buttonText: string;
}

export default function SignatureWithButton({ buttonText }: ButtonProps) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.container}>
        <p className={styles.signature}>Eric Hine</p>
        <button onClick={() => navigate(PathConstants.CONTACT)} type="submit" className={styles.button}>{buttonText}</button>
      </div>
    </>
  );
}