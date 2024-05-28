import { useNavigate } from 'react-router-dom';

export default function Logar({loginType}){
    const irPara = useNavigate();
    const logar = () => {
      irPara(`${loginType}`);
    };
    return(
        <section className="cadastro-box">
            <div className="cadastro">
                <h1><img src="4lines.png" className='logo-login'/></h1>
                <form  onSubmit={logar} action="" className="cadastro-form">
                    <label htmlFor="user">Nome de Usuário: </label>
                    <input required type="user" name="user" />
                    <label htmlFor="senha">Senha:</label>
                    <input type="password"  required/>
                    <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
                    <input type="submit" value={"Login"} className='submit'/>
                </form>
                
            </div>
        </section>
    )
}