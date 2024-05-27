import { useNavigate } from 'react-router-dom';

export default function Login(){
    const irPara = useNavigate();
    const logar = () => {
      irPara('/Home');
    };
    return(
        <section className="Cadastro-box">
            <div className="cadastro">
                <h1><img src="4lines.png"/></h1>
                <h2>Logar</h2>
                <form action="" className="cadastro">
                    <label htmlFor="user">Nome de Usuário: </label>
                    <input type="user" name="user"/>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" />
                    <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
                </form>
                <button onClick={logar}>Logar</button>
            </div>
        </section>
    )
}