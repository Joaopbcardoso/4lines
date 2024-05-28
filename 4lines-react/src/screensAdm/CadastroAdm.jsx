import { useNavigate } from 'react-router-dom';
import Cadastrar from "../components/Cadastrar"

export default function CadastroAdm(){
    return(
        <Cadastrar 
        loginType={"/log-adm"}
        cadastroType = {"/CadastroAdm"}
        />
    )
}