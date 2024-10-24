import { useNavigate } from 'react-router-dom';

export default function Logar({ loginType, cadastroType }) {
  const irPara = useNavigate();

  const logar = (event) => {
    event.preventDefault();
    irPara(`${loginType}`);
  };

  return (
    <section className="cadastro-box">
      <div className="cadastro">
        <h1><img src="4lines.png" alt="logo da 4Lines" className='logo-login'/></h1>
        <form onSubmit={logar} className="cadastro-form">
          <label htmlFor="user">Nome de Usuário: </label>
          <input required type="text" name="user" />
          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha" required />
          <p>Não tem uma conta? <a href={`/${cadastroType}`}>Cadastre-se</a></p>
          <input type="submit" value={"Login"} className='submit'/>
        </form>
      </div>
    </section>
  );
}
