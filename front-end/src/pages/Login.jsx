import '../styles/pages/login.css';
import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const history = useHistory();

  async function login(event) {
    event.preventDefault();

    try {
      const token = await requestLogin('/login', { email, password });

      console.log(token);

      setToken(token);

      localStorage.setItem('token', JSON.stringify(token));
      // localStorage.setItem('role', role);

      setIsLogged(true);

      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  }

  useEffect(() => {
    const verifyLogin = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MAGIC_NUMBER = 6;
      return (regex.test(email) && password.length >= MAGIC_NUMBER);
    };
    if (verifyLogin()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <NavLink to="/admin/manage" />;

  return (
    <section className="container">
      <form>
        <label htmlFor="email-input">
          Login
          <input
            type="text"
            className=""
            id="email-input"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_login__input-email"
            placeholder="email@trybe.com"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            className=""
            id="password-input"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_login__input-password"
            placeholder="******"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          onClick={ (event) => login(event) }
          disabled={ isDisabled }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
          // onClick={}
        >
          Ainda não tenho conta
        </button>
        {
          failedTryLogin
            && (
              <span
                data-testid="common_login__element-invalid-email"
              >
                Email ou senha inválido
              </span>
            )
        }
      </form>
    </section>
  );
}
