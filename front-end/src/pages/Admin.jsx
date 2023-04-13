import { useEffect, useState } from 'react';
import register from '../services/admin';
import { requestData } from '../services/requests';
import '../styles/pages/admin.css';

const cabecalhoTable = ['ID', 'Nome', 'Email', 'Tipo', 'Excluir'];

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [failCreate, setFailCreate] = useState(false);
  const [role, setRole] = useState('costumer');
  const [users, setUsers] = useState([]);
  const nameStorage = JSON.parse(localStorage.getItem('user')).name;

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

  useEffect(() => {
    async function fetchData() {
      const { data } = await requestData('/register/admin');
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <header className="c-navbar">
        <a
          href="/admin/manage"
          data-testid="customer_products__element-navbar-link-orders"
          className="item-navbar"
        >
          Gerenciar Usuários
        </a>
        <div className="c-empty" />
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="item-navbar"
        >
          {nameStorage}
        </p>
        <a
          href="/"
          data-testid="customer_products__element-navbar-link-logout"
          className="item-navbar"
          onClick={ () => localStorage.removeItem('user') }
        >
          Sair
        </a>
      </header>
      <div className="main-section">
        <h1>Cadastro</h1>
        <div className="c-table c-form">
          <form onSubmit={ register }>
            <div className="c-input">
              <label htmlFor="name">
                Nome
              </label>
              <input
                type="name"
                className=""
                id="name-input"
                value={ name }
                onChange={ ({ target: { value } }) => setName(value) }
                data-testid="admin_manage__input-name"
                placeholder="Nome e sobrenome"
              />
            </div>
            <div className="c-input">
              <label htmlFor="email-input">
                Email
              </label>
              <input
                type="email"
                className=""
                id="email-input"
                value={ email }
                onChange={ ({ target: { value } }) => setEmail(value) }
                data-testid="admin_manage__input-email"
                placeholder="seu-email@site.com.br"
              />
            </div>
            <div />
            <div className="c-input">
              <label htmlFor="password-input">
                Senha
              </label>
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
            </div>
            <div className="c-input">
              <label htmlFor="role-select">
                Tipo
              </label>
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
            </div>

            <button
              data-testid="admin_manage__button-register"
              type="submit"
              onClick={ (event) => tryRegister(event) }
              disabled={ isDisable }
              className="btn-cadastrar"
            >
              Cadastrar
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
        </div>
      </div>
      <section className="c-table c-table-users">
        <table>
          <thead>
            <tr>
              {
                cabecalhoTable.map((item, index) => (
                  <th
                    key={ item }
                    className={ `column-${index + 1}` }
                  >
                    {item}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={ user.id }>
                  <td className="td-item">{user.id}</td>
                  <td className="td-description">{user.name}</td>
                  <td className="td-quantity td-email equal">{user.email}</td>
                  <td className="td-price equal">{user.role}</td>
                  <td className="td-remove">
                    <button
                      type="button"
                      name="remove"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </section>
  );
}
