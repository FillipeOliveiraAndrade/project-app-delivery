import { useEffect, useState } from 'react';
import register from '../services/admin';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [failCreate, setFailCreate] = useState(false);
  const [role, setRole] = useState('costumer');

  async function tryRegister(event) {
    event.preventDefault();

    const { token } = JSON.parse(localStorage.getItem('user'));

    try {
      await register('/register/admin', { email, password, name, role }, token);
      setFailCreate(false);
    } catch (error) {
      console.log(error);
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
    <form onSubmit={ register }>
      <h3>Cadastro</h3>
      <label htmlFor="name">
        Nome
        <input
          type="name"
          className=""
          id="name-input"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
          data-testid="admin_manage__input-name"
          placeholder="Nome e sobrenome"
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
          data-testid="admin_manage__input-email"
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
          data-testid="admin_manage__input-password"
          placeholder="******"
        />
      </label>
      <label htmlFor="role-select">
        Tipo
        <select
          id="role-select"
          data-testid="admin_manage__select-role"
          value={ role }
          type="role"
          onChange={ ({ target: { value } }) => setRole(value) }
        >
          <option>seller</option>
          <option>customer</option>
          <option>administrator</option>
        </select>
      </label>
      <button
        data-testid="admin_manage__button-register"
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
                    data-testid="admin_manage__element-invalid-register"
                  >
                    Email ou senha inválido
                  </span>
                )
      }
    </form>
  );
}
