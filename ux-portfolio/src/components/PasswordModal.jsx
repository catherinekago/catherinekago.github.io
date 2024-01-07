import React, { useState } from "react";
import "./PasswordModal.scss";
import close from "../assets/icons/close.svg";

const PasswordModal = ({ closeModal }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleViewProjectClick = () => {
    // Placeholder method for password validation
    if (password === "your-expected-password") {
      // Perform actions when password is valid, e.g., navigate to the project
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div class="password-modal-wrapper">
      <div class="password-modal">
        <div class="password-header">
          <img
            class="icon-small"
            src={close}
            onClick={closeModal}
            alt="close icon"
          />
        </div>
        <div class="password-body">
          <h3 class="primaryMain">Password, please!</h3>
          <div class="password-controls">
            <div class="password-input-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={{
                  borderColor: error
                    ? "#e10101"
                    : isInputFocused
                    ? "#000000"
                    : "#838383",
                }}
              />
              {error && <p className="error-text">{error}</p>}
            </div>
            <button onClick={handleViewProjectClick}>View Project</button>
          </div>
          <p class="primaryMain text-l">
            <span class="text-l text-title"> Don’t know the password? </span>
            {<br />}
            <a
              class="text-l inline-link inverted"
              target="_blank"
              href="mailto:kathrin.schnizer@gmail.com"
            >
              Contact me
            </a>{" "}
            to request it 🙌"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
