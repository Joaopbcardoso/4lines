import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Inicial from "../components/Inicial";

export default function Home(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/Loja');
    };
    return(
        <>
        <Header/>
        <Inicial/>
        </>
    )
}