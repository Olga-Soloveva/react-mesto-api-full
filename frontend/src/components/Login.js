import React, { useState, useEffect } from "react";

import { useHistory, withRouter } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const history = useHistory();

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setErrorEmailMessage(evt.target.validationMessage);
    setIsValidEmail(evt.target.validity.valid);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setErrorPasswordMessage(evt.target.validationMessage);
    setIsValidPassword(evt.target.validity.valid);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({ password, email })
      .then(resetForm)
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setIsValidForm(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  return (
    <section className="form">
      <div className="form__container">
        <h2 className="form__heading">Вход</h2>

        <form
          className="form__form"
          name="login"
          id="login"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="form__field">
            <input
              value={email}
              onChange={handleChangeEmail}
              className={`form__input ${
                !isValidEmail && "form__input_iserror"
              }`}
              type="email"
              id="email-input"
              name="emailInput"
              autoComplete="on"
              placeholder="Email"
              required
            />
            <span
              className={`form__error email-input-error ${
                !isValidEmail && "form__error_visible"
              }`}
            >
              {errorEmailMessage}
            </span>
          </label>
          <label className="form__field">
            <input
              value={password}
              onChange={handleChangePassword}
              className={`form__input ${
                !isValidPassword && "form__input_iserror"
              }`}
              type="password"
              id="password-input"
              name="passwordInput"
              autoComplete="off"
              placeholder="Пароль"
              required
              minLength="8"
            />
            <span
              className={`form__error password-input-error ${
                !isValidPassword && "form__error_visible"
              }`}
            >
              {errorPasswordMessage}
            </span>
          </label>

          <button
            type="submit"
            className={`form__submit-btn ${
              !isValidForm && "form__submit-btn_disabled"
            }`}
            aria-label="Войти"
            disabled={!isValidForm}
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default withRouter(Login);
