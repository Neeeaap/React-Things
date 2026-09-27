import useInput from "../hooks/useInput";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation";

import FormField from "./FormField";

export default function Login() {
  const {
    value: emailValue,
    InputChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    InputChangeHandler: passwordChangeHandler,
    InputBlurHandler: passwordBlurHandler,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => hasMinLength(value, 6));

  function submitHandler(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }

    console.log("Submitted:", { email: emailValue, password: passwordValue });
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <FormField
          label="email"
          value={emailValue}
          errorMsg="Invalid email address"
          invalid={emailIsInvalid}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />

        <FormField
          label="password"
          value={passwordValue}
          errorMsg="Password must be at least 6 characters long"
          invalid={passwordIsInvalid}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
