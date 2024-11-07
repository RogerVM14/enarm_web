import React, { useState } from "react";
import "./PasswordReset.css";

function PasswordReset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Password has been reset successfully!");
      // Aquí podrías agregar lógica para enviar la nueva contraseña al backend
    }
  };

  return (
    <div className="full-screen-container">
      <div className="reset-container">
        <h4>Ingresa tu nueva contraseña</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="password">Nueva contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">Confirma contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              autoComplete="off"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="reset-button">
            Reestablecer
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
