import '../styles/pages/register.css';
import { useEffect, useState } from 'react';
import register from '../services/register';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [failCreate, setFailCreate] = useState(false);

  async function tryRegister(event) {
    event.preventDefault();
    try {
      await register('/register', { email, password, name });
    } catch (error) {
      setFailCreate(true);
    }
  }

  useEffect(() => {
    const validateRegister = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const SIX = 6;
      const TWELVE = 12;
      return (regex.test(email) && password.length >= SIX && name.length >= TWELVE);
    };
    if (validateRegister()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email, password, name]);

  return (
    <section className="container">
      <form onSubmit={ register }>
        <h1>Cadastro</h1>
        <label htmlFor="name">
          Nome
          <input
            type="name"
            className=""
            id="name-input"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            className=""
            id="email-input"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
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
            data-testid="common_register__input-password"
            placeholder="******"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          onClick={ (event) => tryRegister(event) }
          disabled={ isDisable }
        >
          Register
        </button>

        {
          failCreate
                && (
                  <span
                    data-testid="common_register__element-invalid_register"
                  >
                    Email ou senha inválido
                  </span>
                )
        }
      </form>
    </section>

  );
}
