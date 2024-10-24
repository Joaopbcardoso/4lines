import { useNavigate } from 'react-router-dom';

export default function Cadastrar({loginType}) {
  const irPara = useNavigate();
  
  const cadastrar = (event) => {
    event.preventDefault();
    // Simular cadastro, salvar dados, etc.
    irPara(`${loginType}`);
  };

  return (
    <section className="cadastro-box">
      <div className="cadastro">
        <h1><img src="4lines.png" alt="logo da 4Lines" className='logo-login' /></h1>
        <form onSubmit={cadastrar} className="cadastro-form">
          <label htmlFor="user">Nome de Usuário: </label>
          <input type="text" name="user" placeholder='Nome de Usuário' required/>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="SeuEmail@gmail.com" required/>
          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha" placeholder='Senha' required/>
          <label htmlFor="senha2">Repita sua Senha:</label>
          <input type="password" name="senha2" placeholder='Senha' required/>
          <p>Já tem uma conta? <a href="/">Logar</a></p>
          <input type="submit" className='submit' value={"Cadastrar"}/>
        </form>
      </div>
    </section>
  );
}
