import '../styles/pages/login.css';
import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import requestLogin from '../services/requests';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();

  async function login(event) {
    event.preventDefault();

    try {
      const { data } = await requestLogin('/login', { email, password });

      localStorage.setItem('user', JSON.stringify(data));

      switch (data.role) {
      case 'administrator':
        history.push('/admin/manage');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      case 'customer':
        history.push('/customer/products');
        break;
      default:
        break;
      }
    } catch (error) {
      console.log(error);
      setFailedTryLogin(true);
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

  return (
    <section className="container">
      <form onSubmit={ login }>
        <label htmlFor="email-input">
          Login
          <input
            type="email"
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
            minLength="6"
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
          // onClick={ (event) => login(event) }
          disabled={ isDisabled }
        >
          Login
        </button>
        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
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
