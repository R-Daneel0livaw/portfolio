import { ChangeEvent, useState } from "react";
import styles from "./TextArea.module.css";

const TextArea = () => {
  const [value, setValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("1.85rem");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = event.target;
    const maxHeight = 200;

    setValue(event.target.value);
    if (event.target.value === "") {
      setTextareaHeight("1.85rem");
    } else {
      setTextareaHeight(
        scrollHeight < maxHeight ? scrollHeight + "px" : maxHeight + "px"
      );
    }
  };

  return (
    <textarea
      className={styles.autoHeightTextarea}
      value={value}
      onChange={handleChange}
      style={{ height: textareaHeight }}
    />
  );
};

export default TextArea;