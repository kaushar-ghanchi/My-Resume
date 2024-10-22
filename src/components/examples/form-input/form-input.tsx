import { useState } from "react";
import styles from "./form-input.module.scss";
export const FormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = () => {
    alert("Your input data : Name: " + name + " and Email: " + email);
  };
  return (
    <div>
      <h1>Create a Form to Capture User Input</h1>
      <div>
        <span className={styles.challengeText}>
          Challenge: Implement a form with two input fields—name and email. The
          values should update dynamically as the user types, and when the form
          is submitted, the entered data should appear on the screen.
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Form Submission</h2>{" "}
          <div className={styles.form}>
            <div>
              Name: <input onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              Email: <input onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={handleClick}>Submit</button>
          </div>
          <div className={styles.form}>
            Your Input: <div> Name: {name}</div> <div> Email: {email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
