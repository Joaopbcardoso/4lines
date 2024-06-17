import { useNavigate } from 'react-router-dom';

export default function Header_adm(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/HomeAdm');
    };
    const ParaPerfil = () => {
      irPara('/Perfil');
    };
    return(
        <header className='adm-header'>
            <div className="flex-box">
                <div>
                    <button className='header-button' onClick={handleClick}><img className="logo-header" src="4lines.png" alt="" /></button>    
                </div>
                <button className='addtime-adm'>+</button>
                <div className='nav-editor'>
                    <button className='custom-btn btn-14'>Editar</button>
                    <button className='header-button' onClick={ParaPerfil}><img className="perfil" src="perfil.png" alt="" /></button>
                </div>
            </div>
        </header>
    )
}