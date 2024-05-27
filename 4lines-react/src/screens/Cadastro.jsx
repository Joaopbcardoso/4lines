import { useNavigate } from 'react-router-dom';

export default function Cadastro(){
    const irPara= useNavigate();
    const cadastrar = () => {
      irPara('/Login');
    };
    return(
        <section className="Cadastro-box">
            <div className="cadastro">
                <h1><img src="4lines.png" alt="" /></h1>
                <h2>Cadastro</h2>
                <form action="" className="cadastro">
                    <label htmlFor="user">Nome de Usuário: </label>
                    <input type="user" name="user"/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email"/>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" />
                    <p>Já tem uma conta? <a href="">Logar</a></p>
                    <input type="submit" onClick={cadastrar()}/>
                </form>
            </div>
        </section>
    )
}