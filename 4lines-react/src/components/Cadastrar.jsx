import { useNavigate } from 'react-router-dom';

export default function cadastrar({loginType}){
    const irPara= useNavigate();
    const cadastrar = () => {
      irPara(`${loginType}`);
    };
    return(
        <section className="cadastro-box">
            <div className="cadastro">
                <h1><img src="4lines.png" alt="logo da 4Lines" className='logo-login' /></h1>
                <form onSubmit={cadastrar} action="" className="cadastro-form">
                    <label htmlFor="user">Nome de Usuário: </label>
                    <input type="user" name="user" placeholder='Nome de Usuário' required/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="SeuEmail@gmail.com" required/>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder='Senha' required/>
                    <label htmlFor="senha">Repita sua Senha:</label>
                    <input type="password" placeholder='Senha' required/>
                    <p>Já tem uma conta? <a href="/">Logar</a></p>
                    <input type="submit" className='submit' value={"Fazer Login"}/>
                </form>
            </div>
        </section>
    )
}
