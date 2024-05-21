import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Inicial from "../components/Inicial";
import Footer from '../components/Footer';


export default function Home(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/Loja');
    };
    return(
        <>
        <Header/>
        <Inicial/>
        <Footer/>
        </> 
    )
}