import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import ResetPasswordBtn from '../ResetPasswordBtn/ResetPasswordBtn';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
        <ResetPasswordBtn/>
      </center>
    </div>
  );
}

export default LoginPage;
