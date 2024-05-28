import { useNavigate } from 'react-router-dom';
import Cadastrar from '../components/Cadastrar';

export default function Cadastro(){
    return(
        <Cadastrar 
        logType = {"/"}
        cadastroType = {"/Cadastro"}
        />
    )
}