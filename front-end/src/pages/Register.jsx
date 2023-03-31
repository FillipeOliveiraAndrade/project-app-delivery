import '../styles/pages/register.css';

export default function Register() {
  return (
    <section className="container">
      <form>
        <h1>Cadastro</h1>
        <label htmlFor="name">
          Nome
          <input
            type="name"
            className=""
            id="password-input"
            // value={ password }
            // onChange={ ({ target: { value } }) => setPassword(value) }
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
            // value={ email }
            // onChange={ ({ target: { value } }) => setEmail(value) }
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
            // value={ password }
            // onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_register__input-password"
            placeholder="******"
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          // onClick={ (event) => login(event) }
          // disabled={ isDisabled }
        >
          Login
        </button>

        {/* {
          invalidRegister
                && (
                  <span
                    data-testid="common_register__element-invalid_register"
                  >
                    Email ou senha inválido
                  </span>
                )
        } */}
      </form>
    </section>

  );
}
