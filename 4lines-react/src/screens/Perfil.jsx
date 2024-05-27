import Footer from "../components/Footer";
import Header from "../components/Header";
import Perfis from "../components/Perfis";

export default function Perfil(){
    return(
        <>
            <Header/>
            <Perfis
            banner={"orlando.png"}
            nome={"Heitor"}
            time={"figueirense.png"}
            foto={"macaco.png"}
            />
            <Footer/>
        </>
    )
}